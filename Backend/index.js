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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}`);
})