import { Router } from 'express';
import CharacterController from '../controllers/CharacterController';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.get('/', CharacterController.index);
routes.post('/', loginRequired, CharacterController.store);
routes.get('/:id', CharacterController.show);
routes.put('/:id', loginRequired, CharacterController.update);
routes.delete('/:id', loginRequired, CharacterController.delete);

export default routes;
