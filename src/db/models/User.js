module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    timestamps: false
  });

  User.associate = models => {
    User.belongsToMany(models.House, {
      through: models.UserHouse,
      foreignKey: 'user',
      as: 'Houses'
    });
  }

  return User;
}