// app.js
require('dotenv').config();

const router = require('./routes');

const app = require('express')();

app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
