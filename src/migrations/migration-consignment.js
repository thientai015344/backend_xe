'use strict';
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('consignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING
      },
      nameUserSend: {
        type: Sequelize.STRING
      },
      phonenumberUserSend: {
        type: Sequelize.STRING
      },
      nameUserGet: {
        type: Sequelize.STRING
      },
      phonenumberUserGet: {
        type: Sequelize.STRING
      },
      typecommoditiesId: {
        type: Sequelize.INTEGER
      },
      carhangId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('consignments');
  }
};