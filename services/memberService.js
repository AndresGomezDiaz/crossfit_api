'use strict';
const Member = require('../database/Member');

const getAllMembers = () => {
    try {
        const members = Member.getMembers();
        return members;
    } catch (err) {
        throw err;
    }
};

const getMemberById = (memberId) => {
    try {
        const member = Member.getMemberById(memberId);
        return member;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    getAllMembers,
    getMemberById
};