const express = require('express');

const app = express();


app.set("view engine","pug");

app.get('/',(req,res) => {
    res.render("index",{title:"Hello", message:"Welcome to Node!!"});

})

app.listen(3333, function () {
    console.log('Example app listening on port 3333!')
  })