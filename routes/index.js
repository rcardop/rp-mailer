const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`Hello from ${process.env.PORT || 'default port'}`);
});

module.exports = router;
