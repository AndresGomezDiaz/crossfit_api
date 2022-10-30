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
const getRecordsForWorkoutMember = (workoutId, memberId) => {
    try {
        const record = Record.getRecordsForWorkoutMember(workoutId, memberId);
        return record;
    } catch(err) {
        throw err;
    }
}

module.exports = { 
    getRecordForWorkout,
    getRecordsForWorkoutMember
};