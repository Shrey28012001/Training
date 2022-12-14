const express = require('express');
const router = express.Router();


router.use('/',(req,res,next) => {
    
    console.log("API called");
    next();
});

router.use('/',(req,res,next)=>{
    res.send("Get request called");
    next();
});

router.use('/',(req,res)=>{
    console.log("API call ended");
});

module.exports = router;