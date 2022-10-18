'use strict';

const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workoutController');

router
    .get('/', workoutController.getAllWorkouts)

    .get('/:workoutId', workoutController.getWorkoutById)

    .post('/', workoutController.createWorkout)

    .put('/:workoutId', workoutController.updateWorkout)

    .delete('/:workoutId', workoutController.deleteWorkout)

module.exports = router;