const nodemailer = require('nodemailer')

exports.generateOTP = (otp_length = 6) => {
    let OTP = "";
    for (let i = 1; i <= otp_length; i++) {
        const randomVal = Math.round(Math.random() * 9);
        OTP += randomVal;
    }

    return OTP;
};

exports.generateMailTransporter = () =>
    nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "bf207d4e61cd81",
            pass: "d8c74c2133f6b0"
        }
    });