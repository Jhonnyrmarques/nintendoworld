import Sequelize, { Model } from 'sequelize';

export default class Character extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name must be between 3 and 255 characters',
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [20, 400],
            msg: 'Description must be between 20 and 400 characters',
          },
        },
      },
      creators: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Creators must be between 3 and 255 characters',
          },
        },
      },
      universe: {
        type: Sequelize.STRING,
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
}
