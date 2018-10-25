const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`Hello from ${process.env.RY_HOST || 'nowhere'}`);
});

module.exports = router;
