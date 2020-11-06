const code = {
    pending: 1,
    working: 2,
    review: 3,
    redo: 4,
    close: 5
}

const status_code = {
    1: "pending",
    2: "working",
    3: "review",
    4: "redo",
    5: "close"
}


module.exports = {
    code,
    status_code
}