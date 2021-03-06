import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Character from '../models/Character';
import User from '../models/User';
import Image from '../models/Image';

const connection = new Sequelize(databaseConfig);

const models = [Character, User, Image];

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
