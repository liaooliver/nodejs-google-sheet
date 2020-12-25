const express = require('express');
const router = express.Router();

const { getAllTicket, getSingleTicket, notification } = require('../services/readSheet')

router.get('/all', async function (request, response) {
    getAllTicket(['pending', 'working', 'redo', 'review']).then(res => {
        Promise.all(res).then(res => {
            response.json(res.flat(2))
        })
    })
})

router.get('/ticket/:id', async function (request, response) {
    const { id } = request.params;
    const { status } = request.query;
    getSingleTicket(id, status).then(res => response.json(res))
})

router.get('/last', function (request, response) {
    notification(['pending', 'working', 'redo']).then(res => response.json(res))
})

module.exports = router