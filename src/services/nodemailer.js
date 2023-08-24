'use strict';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendFormData(name, email, message) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `<${name}>, ${email}`, // sender address
    to: `${process.env.NODEMAILER_USER}`, // list of receivers
    text: message, // plain text body
  });

  //Add user copy here if desired

  console.log('Message sent: ', info.messageId);
}

export { sendFormData };
