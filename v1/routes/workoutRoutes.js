'use strict';

const express = require('express');
const router = express.Router();
const apicache = require('apicache');
const cache = apicache.middleware;

const workoutController = require('../../controllers/workoutController');
const recordController = require("../../controllers/recordController");

router
    .get('/', cache('2 minutes'), workoutController.getAllWorkouts)

    .get('/:workoutId', workoutController.getWorkoutById)

    .get("/:workoutId/records", recordController.getRecordForWorkout)

    .get("/:workoutId/records/members/:memberId", recordController.getRecordsByMember)

    .post('/', workoutController.createWorkout)

    .put('/:workoutId', workoutController.updateWorkout)

    .delete('/:workoutId', workoutController.deleteWorkout)

module.exports = router;