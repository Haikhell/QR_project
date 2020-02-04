require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require('./db/connect');

var app = express();

connect.func();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./api/index'));

app.listen(process.env.PORT, function() {
  console.log('good');
});
