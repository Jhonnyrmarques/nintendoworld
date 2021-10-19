"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _characters = require('./routes/characters'); var _characters2 = _interopRequireDefault(_characters);
var _users = require('./routes/users'); var _users2 = _interopRequireDefault(_users);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
var _image = require('./routes/image'); var _image2 = _interopRequireDefault(_image);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static('/imgs/', _path.resolve.call(void 0, __dirname, '..', 'uploads', 'img')));
  }

  routes() {
    this.app.use('/characters/', _characters2.default);
    this.app.use('/users/', _users2.default);
    this.app.use('/token/', _token2.default);
    this.app.use('/images/', _image2.default);
  }
}

exports. default = new App().app;
