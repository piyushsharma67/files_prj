const Sequelize = require("sequelize");

require("dotenv").config();

const dbName = process.env.DATABASE_NAME;
const username = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT;

const sequelize = new Sequelize(dbName, username, password, {
  host,
  dialect,
});

const connection = async () => {
  try {
      await sequelize.authenticate;
      console.log(`Connection to ${dialect} has been established successfully...`)
  } catch (err) {
      console.log(`Unable to connect to database: ${err}`)
  }
};

connection();

module.exports = sequelize;
global.sequelize=sequelize;