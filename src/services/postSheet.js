// require DB model from model
const {
    pending_sheet,
    working_sheet
} = require('../models/spreadsheet');
const {
    response_getSingleBasicInfo
} = require('./response_format');
const {
    _uuid
} = require('../services/uuid');

async function postNewTicket(body) {
    return pending_sheet().then(sheet =>
        sheet.addRow({
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
    )
}

async function launchTicket(id) {
    const ticket_before = await pending_sheet().then(async sheet => {
        const rows = await sheet.getRows()
        const indexof = rows.map(x => x.id).indexOf(id)

        return rows[indexof]
    })

    const ticket_after = await working_sheet().then(async sheet => {
        const { id, subject, project, module, description, principal, deadline, creator, createtime } = ticket_before;
        const newRow = await sheet.addRow({ id, subject, project, module, description, principal, deadline, creator, createtime })
        
        const result = response_getSingleBasicInfo(newRow, '1')
        
        return result
    })

    return ticket_after
}

module.exports = {
    postNewTicket,
    launchTicket
};