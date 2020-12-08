const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
  host: 'smtp.MAILSERVER.TLD',
  port: 465,
  secure: true,
  auth: {
    user: 'EMAIL',
    pass: 'PASSWORD',
  },
});
