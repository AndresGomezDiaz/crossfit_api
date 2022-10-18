'use strict';

const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
}

const getWorkoutById = (workoutId) => {
    const workoutInfo = DB.workouts.findIndex(
        (a) => a.id === workoutId
    );
    if(workoutInfo === -1) {
        return;
    }
    return DB.workouts[workoutInfo];
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex(
        (workout) => workout.name === newWorkout.name
    );
    
    if(isAlreadyAdded > -1) {
        return;
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
}

module.exports = {
    getAllWorkouts,
    createNewWorkout,
    getWorkoutById
}