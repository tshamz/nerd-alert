const nodemailer = require('nodemailer');
// const email = require('./email.js');
const email = require('./email-10-17-2017.js');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tyler@bvaccel.com',
    pass: 'aiug8330'
  }
});

const getEmailString = () => {
  return Promise.resolve(email.body);
};

const sendEmail = emailString => {
  const mailOptions = {
    from: '"The Math Resource Center" <tyler@bvaccel.com>',
    to: 'all@bvaccel.com',
    cc: 'tyler@bvaccel.com',
    subject: `🚨 Nerd Alert™`,
    html: emailString
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
};

getEmailString()
  .then(sendEmail);
