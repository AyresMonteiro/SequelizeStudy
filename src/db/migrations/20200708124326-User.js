'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Users', {
      userID: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Users');
  }
};
