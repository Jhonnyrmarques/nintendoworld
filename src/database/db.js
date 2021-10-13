import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Charactere from '../models/Charactere';

const connection = new Sequelize(databaseConfig);

const models = [Charactere];

models.forEach((model) => model.init(connection));
