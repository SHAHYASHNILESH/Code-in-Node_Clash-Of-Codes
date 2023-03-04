const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupname :{
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    startdate:{
        type:Date,
        required:true

    },
    duration:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

const Group = mongoose.model('GROUP',groupSchema);
module.exports = Group;