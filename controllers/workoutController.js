'use strict';

const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts();
        res.status(200).send({status: 'Ok', total: allWorkouts.length, results: allWorkouts});
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
        return;
    }
};

const getWorkoutById = (req, res) => {
    const { params: {workoutId}} = req;
    if(!workoutId){
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
        return;
    }
    try {
        const workout =  workoutService.getWorkoutById(workoutId);
        res.status(200).send({status:'Ok', total: 1, results:workout})
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
    }
    
};

const createWorkout = (req, res) => {
    const { body } = req;
    // Aquí metemos las validaciones (joi, express-validate)
    if( !body.name ) {
        res
        .status(400)
        .send({
            status: "FAILED",
            data: {
            error: `One of the following keys is missing or is empty in request body: 
                    'name', 'mode', 'equipment', 'exercises', 'trainerTips'`,
            },
        });
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
    try {
        const createdWorkout = workoutService.createWorkout(newWorkout);
        res.status(201).send({status: 'Ok', data: createdWorkout});
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
    }
};

const updateWorkout = (req, res) => {
    const { 
        body, 
        params: { workoutId }
    } = req;

    if(!workoutId) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
        return;
    }
    const updatedWorkout = workoutService.updateWorkout(workoutId, body);
    res.status(200).send({status: 'Ok', data: updatedWorkout});
}

const deleteWorkout = (req, res) => {
    const { params: {workoutId}} = req;
    if(!workoutId){
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
        return;
    }
    try {
        workoutService.deleteWorkout(workoutId);
        res.status(204).send({status: 'Ok'});
    } catch(err) {
        res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { err: err?.message || err } });
    }
    
}

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};