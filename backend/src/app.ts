import express, { Request, Response, NextFunction, Application } from 'express';

const app: Application = express();
const cors = require('cors');

const middleware = require('./middleware/middlewares');
// const { admin, db } = require('./config/firebase');
const routes = require('./routes/routes');

require('dotenv').config();

app.use(cors());

app.use(middleware.verifyAccessToken);

app.use('/api', routes);

app.listen(8080, () => {
  console.log('Server started...');
});
