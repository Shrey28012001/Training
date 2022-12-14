const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3db4fb83aebc0b",
        pass: "33cc1eabae84d7"
    }

});

let mailDetails = {
    from: 'sp.nxon@gmail.com',
    to: 'shreyp567@gmail.com',
    subject: 'Test mail From computer',
    text: 'Sending from nodejs mail to check code'
};

mailTransporter.sendMail(mailDetails, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Email sent successfully... Check email acoount");
    }
})