import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './Routes';

// MongoDB
// mongoose.connect('mongodb://localhost:27017/api_data', () => {
// 	console.log('Connected to database');
// });

const application = express();

// Middleware
application.use(bodyParser.json());
application.use('/', routes);

export default application;