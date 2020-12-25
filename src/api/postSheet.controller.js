const express = require('express');
const router = express.Router();

const { postNewTicket, updateApply } = require('../services/postSheet');

router.post('/postform', function (request, response) {
    const body = request.body
    postNewTicket(body).then(() => {
        response.status(200).send(JSON.stringify("SUCCESS"))
    })
})

router.post('/updateForm/:id', function (request, response) {
    const { id } = request.params;
    updateApply(id, request.body).then((res) => {
        response.status(200).json(res)
    })
})

module.exports = router