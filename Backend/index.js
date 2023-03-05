const dotenv = require('dotenv');
const express = require('express');
const multer=require('multer');
const path=require('path');
const postRoute=require('./router/posts');
const imageModel=require('./models/imageSchema');

const upload=require('./middleware/upload');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn');

app.use(express.json());
app.use(require('./router/auth'));
app.use(require('./router/travel'));
app.use(require('./router/group'));

app.post('/api/upload',upload.single('file'),(req,res)=>{
    const file=req.file;
    res.json(file.filename);
})


app.use('/api/posts',postRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}`);
})