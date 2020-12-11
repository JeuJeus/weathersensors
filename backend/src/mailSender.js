const nodeMailer = require('nodemailer');
const env = require('./env');
const log = require('./logger');

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
    if (error) {
      log.logWrite('ERROR', `FAILURE SENDING MAIL TO [${mailContentAndOptions.to}] WITH CONTENT [[${mailContentAndOptions.text}]`);
      return false;
    } else {
      log.logWrite('INFO', `SEND TO [${mailContentAndOptions.to}] WITH CONTENT [[${mailContentAndOptions.text}]`);
      return true;
    }
  });
}

module.exports = {
  sendMail,
};
