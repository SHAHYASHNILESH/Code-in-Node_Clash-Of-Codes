import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import axios from 'axios'

import './Service.scss'
import '../font-awesome-4.7.0/css/font-awesome.min.css'


const TravelTogether = () => {
    const [groupSize, setGroupSize] = useState(0);
    const [ageGroupFrom, setAgeGroupFrom] = useState(0);
    const [ageGroupTill, setAgeGroupTill] = useState(0);
    const [interests, setInterests] = useState('');
    const [genderPreference, setGenderPreference] = useState('');
    const [location, setLocation] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableTill, setAvailableTill] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/find-traveler', {
                location,
                interests,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <div id='homepage'>
            <Header />
            <div className='container' style={{ marginTop: '10rem' }}>
                <h2>Find a Travel Companion</h2>
                <form onSubmit={handleSubmit} className="row px-5">
                    <div className='form-group col-12 px-5'>
                        <label htmlFor="groupSize">Group Size:</label>
                        <input
                            type="number"
                            id="groupSize"
                            value={groupSize}
                            onChange={(e) => setGroupSize(e.target.value)}
                            className="form-control" required
                        />
                    </div>
                    <br />
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="ageGroupFrom">Age Group From:</label>
                        <input
                            type="number"
                            id="ageGroupFrom"
                            value={ageGroupFrom}
                            onChange={(e) => setAgeGroupFrom(e.target.value)}
                            required className='form-control'
                        />
                    </div>
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="ageGroupTill">Age Group Till:</label>
                        <input
                            type="number"
                            id="ageGroupTill"
                            value={ageGroupTill}
                            onChange={(e) => setAgeGroupTill(e.target.value)}
                            required className='form-control'
                        />
                    </div>
                    <br />
                    {/* <div className='form-group col-6 px-5'>
                        <label htmlFor="interests">Interests:</label>
                        <input
                            type="text"
                            id="interests"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            required className='form-control'
                        />
                    </div> */}
                    <br />
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="genderPreference">Gender Preference:</label>
                        <select
                            id="genderPreference"
                            value={genderPreference}
                            onChange={(e) => setGenderPreference(e.target.value)} required className='form-control'
                        >
                            <option value="Any">Any</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <br />
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required className='form-control'
                        />
                    </div>
                    <br />
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="availableFrom">AvailableFrom:</label>
                        <input
                            type="date"
                            id="date1"
                            value={availableFrom}
                            onChange={(e) => setAvailableFrom(e.target.value)}
                            required className='form-control'
                        />
                    </div>
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="availableTill">AvailableTill:</label>
                        <input
                            type="date"
                            id="date1"
                            value={availableTill}
                            onChange={(e) => setAvailableTill(e.target.value)}
                            required className='form-control'
                        />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-success mt-5 col-3 py-1'>Find Matches</button>
                </form>
                {/* display matching results */}
            </div>
            <Footer />
        </div>
    )
}

export default TravelTogether