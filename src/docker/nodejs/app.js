const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path: path.join(__dirname, '.env')});

const app = express();
const helloRouter = require('./routes/helloRouter');

app.use('/', helloRouter);

app.listen(process.env.PORT, () => {
  console.log(`Current app listening at http://localhost:${process.env.PORT}`);
});