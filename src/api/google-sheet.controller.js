const express = require('express');
const router = express.Router();

const googleSheet = require('../models/spreadsheet');
const readSheetService = require('../services/readSheet');

router.get('/', async function (request, response) {
    googleSheet.accessSpreadsheet().then(sheet => {
        console.log("accessSpreadsheet => ,", sheet.sheetsByIndex[1].title)
        readSheetService.loopAllData(sheet).then(res => response.send(res))
    })
})

module.exports = router;