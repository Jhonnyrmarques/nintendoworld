"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('characters',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: Sequelize.TEXT('long'),
          allowNull: false,
        },
        creators: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        universe: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('characters');
  },
};
