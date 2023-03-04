const mongoose=require('mongoose');

const imageSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        data:Buffer,
        contentType:String,
    }
});

const image= mongoose.model('image', imageSchema);
module.exports =image;
