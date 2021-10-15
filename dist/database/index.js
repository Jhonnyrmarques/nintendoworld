"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Character = require('../models/Character'); var _Character2 = _interopRequireDefault(_Character);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Image = require('../models/Image'); var _Image2 = _interopRequireDefault(_Image);

const connection = new (0, _sequelize.Sequelize)(_database2.default);

const models = [_Character2.default, _User2.default, _Image2.default];

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
