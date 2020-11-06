// require DB model from model
const googleSheet = require('../models/spreadsheet');
const { _uuid } = require('../services/uuid');

async function postNewTicket(body) {
    console.log("body => ", body)
    return googleSheet.accessSpreadsheet().then(async (doc) => {
        const sheets = doc.sheetsByTitle['pending']
        const add = await sheets.addRow({
            id: _uuid(),
            subject: body.subject,
            project: body.project,
            module: body.module,
            description: body.description,
            principal: body.principal,
            deadline: body.deadline,
            creator: body.creator,
            createtime: new Date(),
        })
        return add
    })
}

module.exports = {
    postNewTicket
};