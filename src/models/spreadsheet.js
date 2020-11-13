const { GoogleSpreadsheet } = require('google-spreadsheet');

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1tloIdgp49FCRyS2vg6ShKSTw-02f_6Cb9xCXlxfI_YI');
    await doc.useServiceAccountAuth({
        // eslint-disable-next-line no-undef
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        // eslint-disable-next-line no-undef
        private_key: process.env.GOOGLE_PRIVATE_KEY,
    });
    await doc.loadInfo();

    return doc;
}

// How to use 
    // pending_sheet().then(sheet => sheet.getRows().then(row => console.log("ROW => ," , row)))
function pending_sheet() {
    return accessSpreadsheet().then(async (doc) => {
        return doc.sheetsByTitle['pending']
    })    
}

function working_sheet() {
    return accessSpreadsheet().then(async (doc) => {
        return doc.sheetsByTitle['working']
    })    
}

function redo_sheet() {
    return accessSpreadsheet().then(async (doc) => {
        return doc.sheetsByTitle['redo']
    })    
}

function review_sheet() {
    return accessSpreadsheet().then(async (doc) => {
        return doc.sheetsByTitle['review']
    })    
}

function close_sheet() {
    return accessSpreadsheet().then(async (doc) => {
        return doc.sheetsByTitle['close']
    })    
}

module.exports = {
    accessSpreadsheet,
    pending_sheet,
    working_sheet,
    redo_sheet,
    review_sheet,
    close_sheet
}