function calcAtLeast(deadline) {

    let isAlert = false;
    const current = new Date().getTime()
    const due = new Date(deadline).getTime()
    const atLeast = Math.ceil((due - current)/86400000);
    if(atLeast <= 7) isAlert = true

    return {
        atLeast,
        isAlert
    }
}

module.exports = {
    calcAtLeast
}