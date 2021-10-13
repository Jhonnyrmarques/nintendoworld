import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import charactersRoutes from './routes/characters';
import userRoutes from './routes/users';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/characters/', charactersRoutes);
    this.app.use('/users/', userRoutes);
  }
}

export default new App().app;
