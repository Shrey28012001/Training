const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3db4fb83aebc0b",
        pass: "33cc1eabae84d7"
    }
});

let mailOptions = {
    from: 'smtp.mailtrap.io',
    to: 'shreyp567@gmail.com',
    subject: 'Sending mail using Node.JS',
    text: 'Kem Chho ! majama ?'
};

transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent : ' + info.response);
    }
});