const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router');
const { connectionString } = require('./configs/main');

app.use(bodyParser.json());

mongoose.connect(connectionString, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', router);

app.listen(5000, () => {
  console.log('listening port 5000');
});
