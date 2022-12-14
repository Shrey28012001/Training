const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

const moongose = require('mongoose');

const dbURL = require('./property').DB_URL;

mongoose.connect(dbURL);

mongoose.connection.on("connected",() =>{
    console.log("MongoDB connection connected");
})

app.listen(3000)