import { Router } from 'express';
import CharacterController from '../controllers/CharacterController';

const routes = new Router();

routes.get('/', CharacterController.index);
routes.post('/', CharacterController.store);

export default routes;
