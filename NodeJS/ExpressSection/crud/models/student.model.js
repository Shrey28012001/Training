const mongoose = require('mongoose');

const studetSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    dob:String,
    department:String
  });
  
  const StudentModel = mongoose.model("student",studetSchema);

  module.exports = StudentModel;