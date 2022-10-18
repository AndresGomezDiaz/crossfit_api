'use strict';

const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.status(200).send({status: 'Ok', total: allWorkouts.length, results: allWorkouts});
};

const getWorkoutById = (req, res) => {
    const workout =  workoutService.workoutById(req.params.workoutId);
    res.status(200).send({status:'Ok', total: 1, results:workout})
};

const createWorkout = (req, res) => {
    const {body} = req;
    // Aquí metemos las validaciones (joi, express-validate)
    if(!body.name) {
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
    const createdWorkout = workoutService.createWorkout(newWorkout);
    res.status(201).send({status: 'Ok', data: createdWorkout});
};

const updateWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateWorkout(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`);
}

const deleteWorkout = (req, res) => {
    workoutService.deleteWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`);
}

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};