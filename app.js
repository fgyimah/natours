const express = require('express');
const logger = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//middleware
app.use(express.json());
app.use(logger('dev'));

//serve static files
app.use(express.static(`${__dirname}/public`));

//routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
