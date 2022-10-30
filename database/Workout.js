'use strict';

const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = (filterParams) => {
    try {
        let workouts = DB.workouts;
        if(filterParams.mode) {
            workouts = workouts.filter((workout) => 
                workout.mode.toLowerCase().includes(filterParams.mode.toLowerCase())
            );
        }

        if(filterParams.regs && filterParams.page) {
            let total = workouts.length;
            let numPaginas = Math.trunc(total / Number(filterParams.regs));
            if(total % Number(filterParams.page)) numPaginas++;
            let inicio = 1;
            if(Number(filterParams.page) > 1) inicio = (Number(filterParams.regs) * (Number(filterParams.page) - 1)) + 1;
            let final = inicio + Number(filterParams.regs);
            workouts = workouts.slice(Number(inicio - 1), Number(final - 1));
        }
        return workouts;
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