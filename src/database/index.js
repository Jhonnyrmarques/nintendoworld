import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Character from '../models/Character';
import User from '../models/User';

const connection = new Sequelize(databaseConfig);

const models = [Character, User];

models.forEach((model) => model.init(connection));
