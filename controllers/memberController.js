'use strict';

const memberService = require('../services/memberService');

const getAllMembers = (req, res) => {
    try {
        const members = memberService.getAllMembers();
        res.status(200).send({status: 'Ok', total: members.length, data: members});
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
        return;
    }
};

const getMemberById = (req, res) => {
    const { params: {memberId}} = req;
    if(!memberId){
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
        return;
    }
    try {
        const member = memberService.getMemberById(memberId);
        res.status(200).send({status: 'Ok', data: member});
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