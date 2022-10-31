'use strict';

const memberService = require('../services/memberService');

const getAllMembers = async (req, res) => {
    try {
        const members = await memberService.getAllMembers();
        res.status(200).send({status: 'Ok', total: members.rowCount, data: members.rows});
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
        return;
    }
};

const getMemberById = async (req, res) => {
    const { params: {memberId}} = req;
    if(!memberId){
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
        return;
    }
    try {
        const member = await memberService.getMemberById(memberId);
        res.status(200).send({status: 'Ok', data: member.rows});
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
        return;
    }
}

module.exports = {
    getAllMembers,
    getMemberById
};