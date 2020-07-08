module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define('House', {
    houseID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { timestamps: false });

  House.associate = models => {
    House.belongsToMany(models.User, {
      through: models.UserHouse,
      foreignKey: 'house',
      as: 'Habitants',
    });
  }

  return House;
}