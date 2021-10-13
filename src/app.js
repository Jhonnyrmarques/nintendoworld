import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import charactersRoutes from './routes/characters';

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
  }
}

export default new App().app;
