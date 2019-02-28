const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

//initialise express and register middleware
const app = express();

//incoming requests with JSON payloads 
app.use(express.json());
//parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//make express responsive to requests

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})

module.exports = app;