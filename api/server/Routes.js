import express from 'express';

import HomeController from './controllers/HomeController';
import UserController from './controllers/UserController';

const routes = express();

// Get route testing
routes.get('/', HomeController.get);
routes.get('/users', UserController.get);

// Post route testing
// routes.post('/signup', UserController.post);

export default routes;