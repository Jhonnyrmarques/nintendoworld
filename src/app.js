import express from 'express';

import characteresRoutes from './routes/characteres';

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
    this.app.use('/characteres/', characteresRoutes);
  }
}

export default new App().app;
