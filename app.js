const express = require('express');
const app = express();
const port = 3001;

require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser')

const google_sheet = require('./src/api/google-sheet.controller');
const getSheet = require('./src/api/getSheet.controller')
const postSheet = require('./src/api/postSheet.controller')

app.use(cors());
app.use(bodyParser.json()) // parse json
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded

app.get('/', (request, response) => {
    response.send("HOME PAGE")
})

app.use('/google-sheet', google_sheet)
app.use('/getSheet', getSheet)
app.use('/postSheet', postSheet)



app.listen(port, () => {
    console.log("Express is running PORT:" + port);
})
