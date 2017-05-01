import express from 'express';
import HomeController from './controllers/HomeController';
import PostsController from './controllers/PostsController';

const routes = express();

// Get route testing
routes.get('/', HomeController.get);
routes.get('/posts', PostsController.getAll);

// Post route testing
// routes.post('/signup', UserController.post);

module.exports = routes;