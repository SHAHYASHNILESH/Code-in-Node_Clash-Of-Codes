const dotenv = require('dotenv');
const express = require('express');
const multer=require('multer');
const path=require('path');
const imageModel=require('./models/imageSchema');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn');

app.use(express.json());
app.use(require('./router/auth'));

const storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});

const upload=multer({
    storage:storage,
}).single('testImage')

app.post('/upload',(req,res)=>{
   upload(req,res,(err)=>{
     if(err){
        console.log(err);
     }
     else{
        const newImage=new imageModel({
            name:req.body.name,
            image:{
                data:req.file.filename,
                contentType:'image/jpg'
            }
        })
        newImage.save().then(()=>res.send("Image Uploaded")).catch(err=>console.log(err));
     }
   })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}`);
})