const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send("We can acces to user detail")
})

// Dyanamic
router.get('/datas/:id',(req,res) => {
    res.send("User detail : " + req.params.id);
})


router.get('/search/:key',(req,res) => {
    res.send("Data is  : ",+req.params.key);
})

// router.get('/searchKey/:key([a-zA-Z]{5})',(req,res) => {
//     res.send("Data is  : ",+req.params.key);
// });

router.get('*',(req,res) => {
    res.send("URL not valid")
})

router.get('/data',(req,res) => {
    
    const userObj ={
        id:36,
        name:"Shrey",
        lastName:'Patel',
        status:true
    }
    res.send(userObj)
})

module.exports=router;