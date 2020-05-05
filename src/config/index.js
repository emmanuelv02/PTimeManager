require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,

  databaseName: process.env.DATABASE_NAME,
  databaseUser: process.env.DATABASE_USER,
  databasePass: process.env.DATABASE_PASS,
  databaseHost: process.env.DATABASE_HOST
};
