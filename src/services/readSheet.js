// require DB model from model
const { accessSpreadsheet } = require('../models/spreadsheet');
const {
    response_allTicket,
    response_closeTicket,
    response_getSingleBasicInfo
} = require('./response_format');
const {
    status_code
} = require('../config/status');

// write business logic example
function loopAllData(sheet) {

    const sheets = sheet.sheetsByIndex[0];
    const rows = sheets.getRows();

    return rows.then(row => row.map(row => {
        return {
            name: row.name,
            movie: row.movie
        }
    }))
}

async function getAllTicket(category) {
    return accessSpreadsheet()
        .then(async (doc) => {
            return await category.map(async (status) => {
                const sheets = doc.sheetsByTitle[status];
                const rows = sheets.getRows();
                return await rows.then(row => {
                    return row.map(row => {
                        if (status === 'close') return response_closeTicket(row, status)
                        if (status !== 'close') return response_allTicket(row, status)
                    })
                })
            })
        })
}

async function getSingleTicket(id, status) {
    const title = status_code[status]
    return accessSpreadsheet()
        .then(async (doc) => {
            const sheets = doc.sheetsByTitle[title]
            const rows = sheets.getRows();
            return await rows.then(row => {
                const filter = row.filter(row => row.id === id)
                return response_getSingleBasicInfo(filter[0], status)
            })
        })
}

function getLast() {
    console.log("LAST")
}

function notification(category) {
    return getAllTicket(category).then(res => {
        return Promise.all(res).then(res => {
            const all = res.flat(2)
            const filtered = all.filter(item => item.remainer < 30)
            const sorted = filtered.sort((a, b) => a.remainer - b.remainer)
            return sorted
        })
    })
}

module.exports = {
    loopAllData,
    getAllTicket,
    getSingleTicket,
    getLast,
    notification
};