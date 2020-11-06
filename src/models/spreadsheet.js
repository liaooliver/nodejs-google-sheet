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

module.exports.accessSpreadsheet = accessSpreadsheet