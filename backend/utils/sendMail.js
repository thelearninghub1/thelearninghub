const nodemailer = require('nodemailer');

const sendMail = async (options) => {

    const transporter = nodemailer.createTransport({
        port:process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        host: process.env.SMTP_HOST,
        auth:{
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });


    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to:options.email,
        subject: options.subject,
        text: options.message

    };

    await transporter.sendMail(mailOptions)
};

module.exports = sendMail;