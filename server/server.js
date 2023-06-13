/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const platform_api = require('./apis/platform-api');
const cors = require('cors');
const bodyParser = require('body-parser');
const dir = `${__dirname}/public/`;
const motion_dir = `${__dirname}/public/tests/motion/`;
const form_fixed_dir = `${__dirname}/public/tests/form_fixed/`;
const form_random_dir = `${__dirname}/public/tests/form_random/`;

app.use(express.static("public"))
//sets up middleware: 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser()); //Hvorfor brukes cookieParser her?

//Define routes:
app.use('/', platform_api); //Platform_Api contains endpoints for handling specific API routes

const port = process.env.PORT || 8080

app.get('/motion', (req, res) => { //When a get request is made to this rpute, the server responds by sending the "index.html" file from the motion directory
  res.sendFile(motion_dir + "index.html", { dotfiles: "allow" });
})

app.get('/form-fixed', (req, res) => {
  res.sendFile(form_fixed_dir + "index.html", { dotfiles: "allow" });
})

app.get('/form-random', (req, res) => {
  res.sendFile(form_random_dir + "index.html", { dotfiles: "allow" });
})

app.get('*', (req, res) => {
  res.sendFile(dir + "index.html")
})

app.listen(port, () => {
  console.log(`Magno server listening on port ${port}`)
})