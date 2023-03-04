const path=require('path');
const multer=require('multer');

const storage=multer.diskStorage({
    destination:'images',
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});

const upload=multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        
        if(
          file.mimetype=='image/jpeg'||
          file.mimetype=='image/jpg'||
          file.mimetype=='image/png'
        ){
           cb(null,true) 
        }else{
           console.log('Only jpg and png file allowed');
           cb(null,false) 
        }
    },
})

module.exports=upload;
