const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sp.test.nxon@gmail.com',
        pass:'Shrey2801'
    }
});

let mailOptions = {
    from :'sp.test.nxon@gmail.com',
    to:'shreyp567@gmail.com',
    subject:'Sending mail using Node.JS',
    text:'Kem Chho ! majama ?'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent : '+info.response);
    }
});