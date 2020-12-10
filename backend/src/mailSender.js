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
  transporter.sendMail(mailContentAndOptions, (error, info) => {
    //TODO INTRODUCE LOGGER
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log(info);
      return true;
    }
  });
}

module.exports = {
  sendMail,
};
