'use strict';

const Record = require('../database/Record');

const getRecordForWorkout = (workoutId) => {
    try {
        const record = Record.getRecordForWorkout(workoutId);
        return record;
    } catch (err) {
        throw err;
    }
};

module.exports = { getRecordForWorkout };