import express from 'express';
import bodyParser from 'body-parser';
import { Routes } from './routes/routes';
import mongoose from 'mongoose';
import cors from 'cors';

class App {
  app: express.Application;
  routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
      next();
    });
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.connect('mongodb://localhost:27017/users', {})
      .then(() => { console.log('Database Connected'); })
      .catch(err => { console.log(err); });
  }
}

export default new App().app;

