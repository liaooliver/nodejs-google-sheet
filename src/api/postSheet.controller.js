const express = require('express');
const router = express.Router();

const { postNewTicket, launchTicket } = require('../services/postSheet');

router.post('/postform', function (request, response) {
    const body = request.body
    postNewTicket(body).then(() => {
        response.status(200).send(JSON.stringify("SUCCESS"))
    })
})

router.post('/launch', function (request, response) {
    const { id } = request.query;
    
    launchTicket(id).then(res => {
        response.json(res)
    })
})

module.exports = router