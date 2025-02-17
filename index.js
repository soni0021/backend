const express = require('express')
const app = express()
const usersRouter = require('./routes/auth');
app.use('/user','userRouter');
// respond with "hello world" when a GET request is made to the homepage
const usersRouter1 = require('./routes/func');;
app.use('/users','usersRouter1');
  app.listen(3000);