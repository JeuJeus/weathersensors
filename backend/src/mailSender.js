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
    //TODO INTRODUCE LOGGER
    if (error) {
      console.log(error);
      return true;
    } else {
      console.log(info);
      return false;
    }
  });
}

module.exports = {
  sendMail,
};
