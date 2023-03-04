const express = require('express');
const router = express.Router();
require('../db/conn');
const Group = require("../models/groupSchema");

router.post('/group',(req,res)=>{
    const{groupname,location,startdate,duration,description} = req.body;

    if(!groupname||!location||!startdate||!duration||!description){
        return res.status(422).json({error:"Plz fill all the  fields!"});
    }
    Group.findOne({groupname:groupname})
    .then((groupExist)=>{
        if(groupExist){
            return res.status(422).json({error:"Group name already exists!"});
        }
        const group = new Group({groupname,location,startdate,duration,description});

        group.save().then(()=>{
            res.status(201).json({message:"Group successfully registered!"});
        }).catch((err)=>res.status(500).json({err:"Failed to register"}));
    }).catch(err=>{console.log(err);});
    
})

module.exports = router;