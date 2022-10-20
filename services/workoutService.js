'use strict';
const Workout = require('../database/Workout');
const { v4: uuid } = require('uuid');

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};
const getWorkoutById = (workoutId) => {
    try {
        const workout = Workout.getWorkoutById(workoutId);
        return workout;
    } catch(err) {
        throw err;
    }
};
const createWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timezone: 'UTC'}),
        updatedAt: new Date().toLocaleString("en-US", {timezone: 'UTC'})
    };
    try {
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    } catch(err) {
        throw err;
    }
    
};
const updateWorkout = (workoutId, changes) => {
    const workoutToUpdate = {
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", {timezone: 'UTC'})
    };
    try {
        const updatedWorkout = Workout.updateOneWorkout(workoutId, workoutToUpdate);
        return updatedWorkout;
    } catch(err) {
        throw err;
    }
    
};
const deleteWorkout = (workoutId) => {
    try {
        Workout.deleteOneWorkout(workoutId);
        return;
    }catch(err){
        throw err
    }
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
}