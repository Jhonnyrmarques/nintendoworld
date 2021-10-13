import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Character from '../models/Character';

const connection = new Sequelize(databaseConfig);

const models = [Character];

models.forEach((model) => model.init(connection));
