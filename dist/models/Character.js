"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Character extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Name already registered in the database',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name must be between 3 and 255 characters',
          },
        },
      },
      description: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
        validate: {
          len: {
            msg: 'Description cannot be empty',
          },
        },
      },
      creators: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Creators must be between 3 and 255 characters',
          },
        },
      },
      universe: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Universe must be between 3 and 255 characters',
          },
        },
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Image, { foreignKey: 'character_id' });
  }
} exports.default = Character;
