'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      barCode: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      supplier: {
        type: Sequelize.STRING(200),
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
