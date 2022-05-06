/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const index = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const CryptoJS = require('crypto-js')
const dir = `${__dirname}/public/`;
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use('/', index);

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.sendFile(dir + "index.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})