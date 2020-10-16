const { GoogleSpreadsheet } = require('google-spreadsheet');

const creds = require('../config/My Project 95466-f991b8ab3338.json');

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1tloIdgp49FCRyS2vg6ShKSTw-02f_6Cb9xCXlxfI_YI');
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); 
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    console.log("ROWS => ", rows)

    return rows.map(row => {
        console.log(row)
        return {
            name: row.name,
            movie: row.movie
        }
    })
}

module.exports.accessSpreadsheet = accessSpreadsheet