import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './Routes';

const application = express();

// Middleware
application.use(bodyParser.json());
application.use('/', routes);

export default application;

module.exports = application;