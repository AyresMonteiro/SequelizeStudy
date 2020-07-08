const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

const config = require('../../config/database');

const sequelize = new Sequelize(config);

async function authenticate() {
  try {
    await sequelize.authenticate();
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

const db = { models: {} };
const isDBConnected = authenticate();

if (isDBConnected) {
  fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
    .forEach(file => {
      db.models[file.substr(0, file.length - 3)] = require(path.resolve(__dirname, file))(sequelize, DataTypes);
      db.models[file.substr(0, file.length - 3)].associate;
    });

  for (let i = 0; i < Object.keys(db.models).length; i++) {
    if (db.models[Object.keys(db.models)[i]].associate)
      db.models[Object.keys(db.models)[i]].associate(db.models);
  }

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  module.exports = db;
} else {
  module.exports = 'Error';
}