const {
    pending_sheet,
    working_sheet
} = require('../models/spreadsheet');

const {
    response_getSingleBasicInfo
} = require('./response_format');

async function launchTicket(id) {

    let rows, indexof;

    const ticket_before = await pending_sheet().then(async sheet => {
        rows = await sheet.getRows()
        indexof = rows.map(x => x.id).indexOf(id)

        return rows[indexof]
    })

    const ticket_after = await working_sheet().then(async sheet => {
        const { id, subject, project, module, description, principal, deadline, creator, createtime } = ticket_before;
        const newRow = await sheet.addRow({
            id,
            subject,
            project,
            module,
            description,
            principal,
            deadline,
            creator,
            createtime
        })
        
        const result = response_getSingleBasicInfo(newRow, '2')
        rows[indexof].delete()
        return result
    })

    return ticket_after
}

module.exports = {
    launchTicket
};