'use strict';

const DB = require('./db.json');

const getRecordForWorkout = (workoutId) => {
    try {
        const record = DB.records.filter((record) => record.workout === workoutId);
        if (!record) {
            console.log('Aquí');
            throw { status: 400, message: `No existe el workoutId: '${workoutId}'` };
        }
        return record;
    } catch (err) {
        throw { status: err?.status || 500, message: err?.message || err };
    }
};

const getRecordsForWorkoutMember = (workoutId, memberId) => {
    try {
        const recordsWO = DB.records.filter((record) => record.workout === workoutId);
        if (!recordsWO) {
            throw { status: 400, message: `No existe el workoutId: '${workoutId}'` };
        }
        const recordsMember = recordsWO.filter((record) => record.member === memberId);
        if(!recordsMember) {
            throw { status: 400, message: `El deportista: ${workoutId} no ha hecho rutinas del workoutId: ${workoutId}` };
        }
        return recordsMember;
    } catch (err) {
        throw { status: err?.status || 500, message: err?.message || err };
    }
};

module.exports = { 
    getRecordForWorkout,
    getRecordsForWorkoutMember
};