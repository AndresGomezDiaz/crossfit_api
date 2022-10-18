'use strict';
// En este proyecto este archivo se requiere para simular la conexión a la base de datos.
const fs = require('fs');

const saveToDatabase = (DB) => {
    fs.writeFileSync('./database/db.json', JSON.stringify(DB, null, 2), {
        encoding: 'utf8'
    });
};

module.exports = {
    saveToDatabase
};