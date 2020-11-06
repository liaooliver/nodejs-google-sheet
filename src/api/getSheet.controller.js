const express = require('express');
const router = express.Router();

const { getAllTicket, getSingleTicket } = require('../services/readSheet')

router.get('/all', async function (request, response) {
    getAllTicket().then(res => {
        Promise.all(res).then(res => {
            response.send(JSON.stringify(res.flat(2)))
        })
    })
})

router.get('/ticket/:id', async function (request, response) {
    const { id } = request.params;
    const { status } = request.query;
    getSingleTicket(id, status).then(res => response.send(JSON.stringify(res)))
})

module.exports = router