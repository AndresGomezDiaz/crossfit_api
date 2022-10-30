'use strict';

const recordService = require('../services/recordService');
const workoutService = require('../services/workoutService');
const memberService = require('../services/memberService');

const getRecordForWorkout = (req, res) => {
    try {
        const { params: {workoutId}} = req;
        if(!workoutId){
            res
            .status(err?.status || 500)
            .send({ status: "FAILED", data: { err: err?.message || err } });
            return;
        }
        const workout = workoutService.getWorkoutById(workoutId);
        const records = recordService.getRecordForWorkout(workoutId);
        res.status(200).send({status: 'Ok', total: records.length, data: {workout: workout, records: records}});
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
    }
}

const getRecordsByMember = (req, res) => {
    try {
        const{ params: {workoutId, memberId}} = req;
        if(!workoutId) {
            res
            .status(err?.status || 500)
            .send({status: 'FAILED', data: {err: err?.message || err }});
            return;
        }
        if(!memberId) {
            res
            .status(err?.status || 500)
            .send({status: 'FAILED', data: {err: err?.message || err }});
            return;
        }
        const workout = workoutService.getWorkoutById(workoutId);
        const member = memberService.getMemberById(memberId);
        const records = recordService.getRecordsForWorkoutMember(workoutId, memberId);
        res.status(200).send({status:'Ok', total: records.length, data: {workout: workout, member: member, records: records}})
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({status: 'FAILED', data: { err: err?.message || err}});
    }
}

module.exports = {
    getRecordForWorkout,
    getRecordsByMember
}