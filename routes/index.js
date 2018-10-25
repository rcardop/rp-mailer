const router = require('express').Router();
const mailer = require('../mail');

router.get('/', (req, res) => {
  res.send(`Hello from ${process.env.RY_HOST || 'nowhere'}`);
});

router.get('/mail/send', (req, res) => {
  mailer.sendMail({ to: process.env.MAIL_TO }, (info) => {
    res.send(info);
  });
});

module.exports = router;
