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

async function sendMail(mailContentAndOptions) {
  return transporter.sendMail(mailContentAndOptions).then((info) => {
    log.logWrite('INFO',
      `SEND TO [${mailContentAndOptions.to}] WITH CONTENT [${mailContentAndOptions.text}]`);
    return true;
  }).catch((error) => {
    log.logWrite('ERROR',
      `FAILURE SENDING MAIL TO [${mailContentAndOptions.to}] WITH CONTENT [${mailContentAndOptions.text}]`);
    return false;
  });
}

module.exports = {
  sendMail,
};
