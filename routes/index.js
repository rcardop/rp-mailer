const router = require('express').Router();
const mailer = require('../mail');

router.get('/', (req, res) => {
  res.send(`Hello from ${process.env.RY_HOST || 'nowhere'}`);
});

router.get('/mail/send', (req, res) => {
  const info = mailer.sendMail({ to: process.env.MAIL_TO });
  if (info) {
    res.send(`Message sent: ${info.messageId}`)
  } else {
    res.send('No message sent!')
  }
});

module.exports = router;
