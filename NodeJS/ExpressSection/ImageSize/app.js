const express = require('express');
const bodyparser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');

const upload = multer({
    dest: './nature.jpg'
});

const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}))

app.post('/upload', upload.single("avatar"), (req, res) => {

    fs.rename(req.file.path, './nature/avatar.jpg', (err) => {
        console.log(err);
    })

    sharp(__dirname + '/nature/avatar.jpg').resize(300, 300).jpeg({
        quality: 50
    }).toFile(__dirname + '/nature/avatar_thumb.jpg');

    sharp(__dirname + '/nature/avatar.jpg').resize(600,600).jpeg({
        quality: 80
    }).toFile(__dirname + '/nature/avatar_preview.jpg');

    return res.json("File Uploded");

});

app.listen(3000,()=>{
    console.log("Listining on port : 3000");
})