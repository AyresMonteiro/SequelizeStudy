'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Houses', {
      houseID: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      location: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Houses');
  }
};
