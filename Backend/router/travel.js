const express = require("express");
const moment = require('moment');
// Router for backend
const router = express.Router();

require('../db/conn');
const User = require('../models/travelSchema');

router.post('/travel', async (req, res) => {
    try {
        const { name, groupSize, ageGroupFrom, ageGroupTill, interests, gender, genderPreference, location, availableFrom, availableTill } = req.body

        const userExist = await User.findOne({
            $and: [
                { name: name },
                { genderPreference: genderPreference },
                { gender: gender },
                { groupSize: groupSize },
                { ageGroupFrom: ageGroupFrom },
                { interests: interests },
                { ageGroupTill: ageGroupTill },
                { location: location },
                { availableFrom: availableFrom },
                { availableTill: availableTill }
            ]
        });

        if (userExist) {
            return res.status(422).json({ error: "Form already submitted" });
        }
        //         location: {
        //     type: 'Point',
        //     coordinates: [-122.4194, 37.7749] // [longitude, latitude]
        //   }
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname',
            params: { name: location },
            headers: {
                'X-RapidAPI-Key': 'ba7641d09dmsh9c04ce9f2dfa20fp11de66jsn1d67aa57e079',
                'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            const latitude = response.data.lat;
            const longitude = response.data.lon;
            const coordinates = [longitude, latitude];
            console.log(availableFrom, availableTill);
            const newUser = new User({
                name, groupSize, ageGroupFrom, ageGroupTill, interests, genderPreference, gender, location: {
                    type: 'Point',
                    coordinates: coordinates,
                    name: location
                }, availableFrom, availableTill
            });
            // Save the new user to the database
            newUser.save((err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('User saved successfully');
                    res.status(201).json({ message: "User saved successfully" });
                }
            });

        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/findTraveler', async (req, res) => {


    const response = {};

    const { groupSize, ageGroupFrom, ageGroupTill, interests, gender, genderPreference, location, availableFrom, availableTill } = req.body


    // Find users based on group size
    User.find({
        groupSize: groupSize,
    }, (err, exactMatches) => {
        if (err) {
            console.error(err);
        } else {
            response.groupSize = exactMatches;
            checkDone();

            User.find({
                groupSize: { $gte: groupSize - 2, $lte: groupSize + 2 },
            }, (err, rangeMatches) => {
                if (err) {
                    console.error(err);
                } else {
                    // Only add range matches if no exact matches were found
                    if (response.groupSize.length === 0) {
                        response.groupSize = rangeMatches;
                    } else {
                        // Add range matches after exact matches
                        // response.groupSize = response.groupSize.concat(rangeMatches);
                    }
                    checkDone();
                }
            });
        }
    });


    // Find users based on age group
    // lte - less than equal, gte - greater than equal
    // User.find({ ageGroupFrom: { $lte: ageGroupTill }, ageGroupTill: { $gte: ageGroupFrom } }, (err, users) => {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         response.ageGroup = users;
    //         checkDone();
    //     }
    // });

    User.aggregate([
        {
            $match: {
                ageGroupFrom: { $lte: ageGroupTill },
                ageGroupTill: { $gte: ageGroupFrom },
            },
        },
        {
            $addFields: {
                ageGroupDiff: {
                    $min: [
                        {
                            $abs: {
                                $subtract: [
                                    ageGroupFrom,
                                    { $max: ['$ageGroupFrom', ageGroupFrom] },
                                ],
                            },
                        },
                        {
                            $abs: {
                                $subtract: [
                                    ageGroupTill,
                                    { $min: ['$ageGroupTill', ageGroupTill] },
                                ],
                            },
                        },
                    ],
                },
            },
        },
        {
            $sort: {
                ageGroupDiff: 1,
            },
        },
        {
            $limit: 10,
        },
    ]).exec((err, users) => {
        if (err) {
            console.error(err);
        } else {
            response.ageGroup = users;
            checkDone();
        }
    });



    User.aggregate([
        {
            $match: {
                interests: { $in: interests }
            }
        },
        {
            $project: {
                _id: 1,
                name: 1,
                groupSize: 1,
                ageGroupFrom: 1,
                ageGroupTill: 1,
                interests: 1,
                gender: 1,
                genderPreference: 1,
                availability: 1,
                location: {
                    type: "Point",
                    coordinates: ["$longitude", "$latitude"],
                    name: "$city"
                },
                matchingInterests: { $size: { $setIntersection: [interests, "$interests"] } }
            }
        },
        {
            $sort: {
                matchingInterests: -1
            }
        }
    ], (err, users) => {
        if (err) {
            console.error(err);
        } else {
            response.interests = users;
            checkDone();
        }
    });



    User.find({
        $and: [
            { gender: genderPreference },
            { genderPreference: gender }
        ]
    }, (err, users) => {
        if (err) {
            console.error(err);
        } else {
            response.genderPreference = users;
            checkDone();
        }
    });

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname',
        params: { name: location },
        headers: {
            'X-RapidAPI-Key': 'ba7641d09dmsh9c04ce9f2dfa20fp11de66jsn1d67aa57e079',
            'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
        }
    };

    axios.request(options, {
        timeout: 10000
    }).then(async function (resp) {
        console.log(resp.data);
        const latitude = resp.data.lat;
        const longitude = resp.data.lon;

        // Find users based on location
        User.aggregate([
            {
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                    distanceField: "distance",
                    spherical: true
                }
            }
        ]).sort({ distance: 1 }).exec((err, users) => {
            if (err) {
                console.error(err);
            } else {
                response.location = users;
                checkDone();
            }
        });
    }).catch(function (error) {
        console.error(error);
    });
    console.log("type")
    const availableFrom2 = moment(availableFrom, 'YYYY-MM-DD').toDate();
    const availableTill2 = moment(availableTill, 'YYYY-MM-DD').toDate();
    console.log(typeof(myDate))

    User.aggregate([
        {
            $match: {
                availableFrom: { $lte: availableTill2 },
                availableTill: { $gte: availableFrom2 },
            },
        },
        {
            $addFields: {
                availableDiff: {
                    $min: [
                        {
                            $abs: {
                                $subtract: [
                                    availableFrom2,
                                    { $max: ['$availableFrom', availableFrom2] },
                                ],
                            },
                        },
                        {
                            $abs: {
                                $subtract: [
                                    availableTill2,
                                    { $min: ['$availableTill', availableTill2] },
                                ],
                            },
                        },
                    ],
                },
            },
        },
        {
            $sort: {
                availableDiff: 1,
            },
        },
        {
            $limit: 10,
        },
    ]).exec((err, users) => {
        if (err) {
            console.error(err);
        } else {
            console.log("first")
            console.log(users)
            response.availability = users;
            checkDone();
        }
    });









    let numResponses = 0;
    function checkDone() {
        numResponses++;
        console.log(`Response received for request ${numResponses}`);
        if (numResponses === 6) {
            console.log('All responses received:');
            console.log(response);
            res.status(201).json(response);
        }
    }


})

module.exports = router;