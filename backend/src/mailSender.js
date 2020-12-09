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

function sendMail(mailContentAndOptions) {
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
