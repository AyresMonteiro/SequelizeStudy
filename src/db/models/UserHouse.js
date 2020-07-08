module.exports = (sequelize, DataTypes) => {
  const UserHouse = sequelize.define('UserHouse', {
    user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'userID'
      }
    },
    house: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Houses',
        key: 'houseID'
      }
    },
  }, {
    timestamps: false
  });

  return UserHouse;
}