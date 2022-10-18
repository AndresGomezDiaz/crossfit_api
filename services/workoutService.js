'use strict';
const Workout = require('../database/Workout');
const { v4: uuid } = require('uuid');

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};
const getWorkoutById = (workoutId) => {
    const workout = Workout.getWorkoutById(workoutId);
    return workout;
};
const createWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timezone: 'UTC'}),
        updatedAt: new Date().toLocaleString("en-US", {timezone: 'UTC'})
    };
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
};
const updateWorkout = () => {
    return;
};
const deleteWorkout = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
}