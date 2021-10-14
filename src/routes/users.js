import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.post('/', userController.store);
routes.put('/:id', loginRequired, userController.update);

export default routes;
