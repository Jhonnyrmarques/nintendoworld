import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import charactersRoutes from './routes/characters';
import userRoutes from './routes/users';
import tokenRoutes from './routes/token';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/characters/', charactersRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/token/', tokenRoutes);
  }
}

export default new App().app;
