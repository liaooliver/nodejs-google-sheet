const express = require('express');
const router = express.Router();

const sampleService = require('../services/sample');

router.get('/', function (req, res) {
    const URL = sampleService.sample();
    return res.send(`Google sheet URL from => ${URL}`)
})

module.exports = router;