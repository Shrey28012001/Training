const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send("Get request for product")
})

router.get('/product',(req,res) => {
    res.send("Its show a product details")
})

module.exports=router;