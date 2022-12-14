const express = require('express')
const app = express();
const path = require('path');

const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,next) => {
        next(null,'Images') // destination to store Image
    },
    filename: (req,file,next)=> {
        console.log(file);
        next(null,Date.now() + path.extname(file.originalname))
    }
})



const upload = multer({storage:storage})

app.set("view engine","ejs");

app.get ("/upload",(req,res)=>{
    res.render("upload");
})

app.post('/upload',upload.single('image'),(req,res)=>{     //  
    res.send("Image Uploaded");
})

app.listen(8000,()=>{
    console.log("Listning on port:8000");
})
