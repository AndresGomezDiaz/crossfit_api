'use strict';

const DB = require('./db.json');

const getMembers = () => {
    try {
        const members = DB.members;
        return members;
    } catch (err) {
        throw { status: 500, message: err?.message || err };
    }
};

const getMemberById = (memberId) => {
    try {
        const member = DB.members.filter((member) => member.id === memberId);
        if (!member) {
            throw { status: 400, message: `No existe el memberId: '${memberId}'` };
        }
        return member;
    } catch (err) {
        throw { status: 500, message: err?.message || err };
    }
};

module.exports = {
    getMembers,
    getMemberById 
};