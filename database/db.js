'use strict';

const { Client } = require('pg');
const config = require('./config');

const client = new Client({
    user: config.DBUSER,
    database: config.DBNAME,
    password: config.DBPASSWORD,
    port: config.DBPORT,
    host: config.DBHOST
});

client.connect()
    .then(() => console.log('Conexión exitosa con BD 🏦'))
    .catch(e => console.log('Error', e))

module.exports = { client }

