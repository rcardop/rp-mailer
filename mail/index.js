const nodemailer = require('nodemailer');

class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secureConnection: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    this.transporter.verify((err, success) => {
      if (err) {
        console.log(err);
      } else {
        console.log('SMTP Connect!', success);
      }
    });

    this.mailOptions = {
      from: '"Testing mailer" <testing@mailer.com>',
      subject: 'Hello ✔',
      text: 'Hello Testing?',
      html: '<b>Hello Testing?</b>',
    };
  }

  async sendMail(options, cb) {
    this.transporter.sendMail({ ...this.mailOptions, ...options }, (err, info) => {
      let response;
      if (err) {
        response = { status: 500 };
      } else {
        response = {
          id: info.messageId,
          preview: nodemailer.getTestMessageUrl(info),
        };
      }
      cb(response);
    });
  }
}

module.exports = new Mailer();
