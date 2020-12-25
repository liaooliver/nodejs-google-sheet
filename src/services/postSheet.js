// require DB model from model
const {
    pending_sheet,
    working_sheet,
    review_sheet
} = require('../models/spreadsheet');

const {
    _uuid
} = require('../services/uuid');

const {
    response_reviewResult
} = require('../services/response_format')

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

async function updateApply(id, data) {

    let rows, indexof;
    
    const work_task = await working_sheet().then(async sheet => {
        rows = await sheet.getRows()

        indexof = rows.map(x => x.id).indexOf(id)
        return rows[indexof]
    })

    const add_review = await review_sheet().then(async sheet => {
        const { id, subject, project, module, description, principal, deadline, creator, createtime } = work_task
        const { finish, comment } = data
        const newRow = await sheet.addRow({
            id,
            subject,
            project,
            module,
            description,
            principal,
            deadline,
            creator,
            createtime,
            finish: finish,
            comment: comment
        })

        const result = await response_reviewResult(newRow, '3')
        rows[indexof].delete()  
        return result
    })

    return add_review
}

module.exports = {
    postNewTicket,
    updateApply
};