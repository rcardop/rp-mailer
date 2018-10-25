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

  sendMail(options) {
    this.transporter.sendMail({ ...this.mailOptions, ...options }, (err, info) => {
      if (err) {
        return { status: 500 };
      }
      return {
        id: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      };
    });
  }
}

module.exports = new Mailer();
