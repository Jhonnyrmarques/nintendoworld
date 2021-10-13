import express from 'express';

import charactersRoutes from './routes/characteres';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/characters/', charactersRoutes);
  }
}

export default new App().app;
