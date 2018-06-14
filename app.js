/**
 * app.js
 */

import path from 'path';
import express from 'express';

import routes from './routes';

// Express app setup
const app = express();


// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// use routes
app.use('/', routes);


export default app;

