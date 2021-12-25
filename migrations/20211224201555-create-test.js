'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.NUMBER
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      requester_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tests');
  }
};