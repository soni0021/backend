const express = require('express')
const app = express()
const usersRouter = require('./routes/auth');
const courseRouter = require('./routes/func');
app.use('/user', usersRouter);
app.use('/course', courseRouter);
  //Add routes for admin login, admin signup, create a course, delete a course, add course content.
app.listen(3000);