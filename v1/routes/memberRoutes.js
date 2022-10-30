'use strict'

const express = require('express');
const router = express.Router();

const memberController = require('../../controllers/memberController');

router
    .get('/', memberController.getAllMembers)

    .get('/:memberId', memberController.getMemberById)


module.exports = router;