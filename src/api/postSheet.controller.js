const express = require('express');
const router = express.Router();

const { postNewTicket } = require('../services/postSheet');

router.post('/postform', function (request, response) {
    const body = request.body
    console.log(body)
    postNewTicket(body).then(res => {
        console.log("postNewTicket => ", res)
        response.status(200).send(JSON.stringify("SUCCESS"))
    })
})

module.exports = router