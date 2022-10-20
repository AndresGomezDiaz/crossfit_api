'use strict';

const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
    try {
        return DB.workouts;
    } catch(err) {
        throw { status: 500, message: err?.message || err };
    }
}

const getWorkoutById = (workoutId) => {
    const workoutInfo = DB.workouts.findIndex(
        (a) => a.id === workoutId
    );
    if(workoutInfo === -1) {
        throw { status: 400, message: `Workout with id '${workoutId}' does not exists` };
    }
    try {
        return DB.workouts[workoutInfo];
    } catch(err){
        throw { status: 500, message: err?.message || err };
    }
    
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex(
        (workout) => workout.name === newWorkout.name
    );
    
    if(isAlreadyAdded > -1) {
        throw { status: 400, message: `Workout with the name '${newWorkout.name}' already exists`};
    }
    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    } catch(err) {
        throw { status: 500, message: err?.message || err };
    }
}

const updateOneWorkout = (workoutId, changes) => {
    const indexForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) {
        throw { status: 400, message: `Workout with id '${workoutId}' does not exists` };
    }
    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        DB.workouts[indexForUpdate] = updatedWorkout;
        saveToDatabase(DB);
        return updatedWorkout;
    } catch(err) {
        throw { status: 500, message: err?.message || err };
    }
};
  
  const deleteOneWorkout = (workoutId) => {
    const indexForDeletion = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForDeletion === -1) {
        throw { status: 400, message: `Workout with id '${workoutId}' does not exists` };
    }
    try {
        DB.workouts.splice(indexForDeletion, 1);
        saveToDatabase(DB);
    } catch(err) {
        throw { status: 500, message: err?.message || err };
    }
  };
  

module.exports = {
    getAllWorkouts,
    createNewWorkout,
    getWorkoutById,
    updateOneWorkout,
    deleteOneWorkout
}