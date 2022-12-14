var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const { updateMany } = require('../models/student.model');
const StudentModel = require('../models/student.model');
const studentModel = require('../models/student.model');


router.get('/', function (req, res, next) {
    res.send('students route works');
});

// Create a new request
router.post('/add',  function(req, res, next){

    console.log(req.body);
    let newStudent = new StudentModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        dob: req.body.dob,
        department: req.body.department
    });

    newStudent.save(function (err, newStudent) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                status: 200,
                message: 'User Added Successfully ',
                studentObj: newStudent
            });

        }
    })
});

// To get all data from mongoDB
router.get('/list',  (req, res, next) => {

    studentModel.find((err,response) => {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send({status:200,students:response});
        }
    })
});

router.get('/searchByFirstName',  (req, res, next) => {

    const firstNameQuery = req.query.firstName;
    studentModel.find({firstName:firstNameQuery},(err,response) => {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send({status:200,resultsFound:response.length,students:response});
        }
    })
});

//Find by ID 
router.get('/searchById',  (req, res, next) => {

    const idparams = req.query.id;
    studentModel.findById(idparams,(err,response) => {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send({status:200,students:response});
        }
    })
});

router.put('/update',  (req, res, next) => {

    const department = req.query.department;
    
    studentModel.update({age:21},{department:department},(err,response) => {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send({status:200,students:response});
        }
    })
});

router.put('/updateUser',  (req, res, next) => {

    const id = req.query.id;
    const lastName = req.query.lastName;
    const department = req.query.department;
    //console.log(id);
    //console.log(lastName);
    //console.log(department);
    studentModel.findByIdAndUpdate(id,{lastName:lastName,department},(err,response) => {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send({status:200,students:response});
        }
    })
});

router.delete('/deleteUser', (req, res, next) => {

    const id = req.query.userId;
    
    studentModel.findByIdAndDelete(id,(err,response) => {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send({status:200,students:response});
        }
    })
});

module.exports = router;