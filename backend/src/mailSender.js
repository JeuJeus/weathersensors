const nodeMailer = require('nodemailer');
const env = require('./env');

let transporter = nodeMailer.createTransport({
  host: env.MAIL_HOST,
  port: env.MAIL_PORT,
  secure: true,
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASSWORD,
  },
});

function sendMail(mailContentAndOptions) {
  //TODO CHECK IF ENV VAR IS SET BEFORE RUNNING IN ORDER TO FIX LOCALHOST MAILING NOT SET
  transporter.sendMail(mailContentAndOptions, (error, info) => {
    if (error) {
      //TODO introduce logger here
      console.log(error);
      res.status(400).send({success: false});
    } else {
      res.status(200).send({success: true});
    }
  });
}

module.exports = {
  sendMail,
};
