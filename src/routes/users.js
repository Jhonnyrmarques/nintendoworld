import { Router } from 'express';
import userController from '../controllers/UserController';

const routes = new Router();

routes.post('/', userController.store);

export default routes;
