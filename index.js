'use strict'
const express = require('express');
// const v1Router = require('./v1/routes');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const v1MemberRouter = require('./v1/routes/memberRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/workouts', v1WorkoutRouter);
app.use('/api/v1/members', v1MemberRouter);

app.listen(PORT, () => { console.log(`🚀 Server listening on port ${PORT}`)});