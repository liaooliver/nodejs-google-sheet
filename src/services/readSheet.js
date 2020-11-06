// require DB model from model
const googleSheet = require('../models/spreadsheet');
const {
    response_allTicket,
    response_closeTicket,
    response_getSingleBasicInfo
} = require('./response_format');
const {
    status_code
} = require('../config/status');

// write business logic
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

async function getAllTicket() {
    const all = ['pending', 'working', 'redo', 'close']
    return googleSheet.accessSpreadsheet()
        .then(async (doc) => {
            return await all.map(async (status) => {
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
    return googleSheet.accessSpreadsheet()
        .then(async (doc) => {
            const sheets = doc.sheetsByTitle[title]
            const rows = sheets.getRows();
            return await rows.then(row => {
                const filter = row.filter(row => row.id === id)
                return response_getSingleBasicInfo(filter[0], status)
            })
        })
}

module.exports = {
    loopAllData,
    getAllTicket,
    getSingleTicket
};