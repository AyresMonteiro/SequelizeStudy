'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('UserHouses', {
      house: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Houses'
          },
          key: 'houseID'
        },
      },
      user: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'userID'
        },
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('UserHouses');
  }
};
