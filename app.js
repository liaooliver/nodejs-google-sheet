const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
const bodyParser = require('body-parser')

const google_sheet = require('./src/api/google-sheet.controller');

app.use(cors());
app.use(bodyParser.json()) // parse json
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.use('/google-sheet', google_sheet)

app.listen(port, () => {
    console.log("Express is running PORT:" + port);
})
