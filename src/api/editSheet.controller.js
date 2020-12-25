const express = require('express');
const router = express.Router();

const { launchTicket } = require('../services/editSheet');

router.put('/launch', function (request, response) {
    const { id } = request.query;
    
    launchTicket(id).then(res => {
        response.json(res)
    })
})

module.exports = router