'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('marca',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        descricao: {
          type: DataTypes.STRING(200),
          allowNull: false
        }
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('marca');
  }
};
