import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import charactersRoutes from './routes/characters';
import userRoutes from './routes/users';
import tokenRoutes from './routes/token';
import imageRoutes from './routes/image';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/files', express.static(resolve(__dirname, '..', 'uploads', 'img')));
  }

  routes() {
    this.app.use('/characters/', charactersRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/token/', tokenRoutes);
    this.app.use('/images/', imageRoutes);
  }
}

export default new App().app;
