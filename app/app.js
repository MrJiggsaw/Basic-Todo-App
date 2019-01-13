const express = require('express');
const db = require('./../db/db');
const bodyParser = require('body-parser');
const {router} = require('./../routes/index.js')


var app = express();

app.use(bodyParser.json());
app.use(router);


const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
  console.log(`Server started at ${PORT}`)
});
