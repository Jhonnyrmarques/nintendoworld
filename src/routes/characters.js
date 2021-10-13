import { Router } from 'express';
import CharacterController from '../controllers/CharacterController';

const routes = new Router();

routes.get('/', CharacterController.index);
routes.post('/', CharacterController.store);
routes.get('/:id', CharacterController.show);
routes.put('/:id', CharacterController.update);

export default routes;
