"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CharacterController = require('../controllers/CharacterController'); var _CharacterController2 = _interopRequireDefault(_CharacterController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const routes = new (0, _express.Router)();

routes.get('/', _CharacterController2.default.index);
routes.post('/', _loginRequired2.default, _CharacterController2.default.store);
routes.get('/:id', _CharacterController2.default.show);
routes.put('/:id', _loginRequired2.default, _CharacterController2.default.update);
routes.delete('/:id', _loginRequired2.default, _CharacterController2.default.delete);

exports. default = routes;
