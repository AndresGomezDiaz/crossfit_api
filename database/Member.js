'use strict';

const DB = require('./db.json');
const dbClient = require('./db');

const getMembers = () => {
    let sql = `SELECT id_member, name, date_birth, email
                FROM member;`
    return dbClient.client.query(sql);
};

const getMemberById = (memberId) => {
    let sql = `SELECT id_member, name, date_birth, email
                FROM member
                WHERE id_member = $1;`
    return dbClient.client.query(sql, [memberId]);
};

module.exports = {
    getMembers,
    getMemberById 
};