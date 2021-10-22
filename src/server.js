'use strict'

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error404 = require('./errors-handlers/404.js');
const error500 = require('./errors-handlers/500.js');
const clothesRouter = require('./routes/clothes.js');
const foodRouter = require('./routes/clothes.js');



app.use(express.json());

app.use(logger);
app.use('/clothes', clothesRouter);
app.use('/food', foodRouter);


app.use('*',error404);
app.use(error500);

module.exports = {
  app: app,
  start:port=>{ app.listen(port, () => console.log('Server is up')),port
}}
