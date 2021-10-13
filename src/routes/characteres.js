import { Router } from 'express';
import CharactereController from '../controllers/CharactereController';

const routes = new Router();

routes.get('/', CharactereController.index);

export default routes;
