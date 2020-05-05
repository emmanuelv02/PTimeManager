const Sequelize = require('sequelize');
const config = require('../config');

module.exports = new Sequelize(config.databaseName, config.databaseUser, config.databasePass,
  {
    host: config.databaseHost,
    dialect: 'postgres',
    operatorAliases: false
  });
