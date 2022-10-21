'use strict';

const recordService = require('../services/recordService');

const getRecordForWorkout = (req, res) => {
    try {
        const { params: {workoutId}} = req;

        if(!workoutId){
            res
            .status(err?.status || 500)
            .send({ status: "FAILED", data: { err: err?.message || err } });
            return;
        }

        const records = recordService.getRecordForWorkout(workoutId);
        res.status(200).send({status: 'Ok', total: records.length, data: records});
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
    }
}


module.exports = {
    getRecordForWorkout
}