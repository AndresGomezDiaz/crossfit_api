'use strict';

const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workoutController');
const recordController = require("../../controllers/recordController");

router
    .get('/', workoutController.getAllWorkouts)

    .get('/:workoutId', workoutController.getWorkoutById)

    .get("/:workoutId/records", recordController.getRecordForWorkout)

    .get("/:workoutId/records/members/:memberId", recordController.getRecordsByMember)

    .post('/', workoutController.createWorkout)

    .put('/:workoutId', workoutController.updateWorkout)

    .delete('/:workoutId', workoutController.deleteWorkout)

module.exports = router;