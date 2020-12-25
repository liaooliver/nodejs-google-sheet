const { code } = require('../config/status');
const { calcAtLeast } = require('./calc');

function response_closeTicket(row, status) { 
    return {
        id: row.id,
        completed: row.completed,
        due: row.deadline,
        subject: row.subject,
        principal: row.principal,
        project: row.project,
        status: code[status]
    }
}
function response_allTicket(row, status) {
    const { atLeast, isAlert } = calcAtLeast(row.deadline)
    return {
        id: row.id,
        remainer: atLeast,
        alert: isAlert,
        due: row.deadline,
        subject: row.subject,
        principal: row.principal,
        project: row.project,
        status: code[status]
    }
}
function response_getSingleBasicInfo({ id, subject, project, module, creator, createtime, principal, deadline, description, finish, comment }, status) {
    const { atLeast, isAlert } = calcAtLeast(deadline)
    return {
        status,
        id,
        subject,
        project,
        module,
        creator,
        createtime,
        principal,
        deadline,
        description,
        isAlert,
        remainer: atLeast,
        finish,
        comment
    }
}

function response_reviewResult({ id, subject, project, module, creator, createtime, principal, deadline, description, finish, comment }, status) {
    const { atLeast, isAlert } = calcAtLeast(deadline)
    return {
        status,
        id,
        subject,
        project,
        module,
        creator,
        createtime,
        principal,
        deadline,
        description,
        isAlert,
        remainer: atLeast,
        finish,
        comment
    }
}

module.exports = {
    response_closeTicket,
    response_allTicket,
    response_getSingleBasicInfo,
    response_reviewResult
}