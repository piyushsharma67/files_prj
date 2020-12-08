const Sequelize = require("sequelize");
const sequelize = require("../db/connection");
module.exports = function (sequelize, DataTypes) {
   const formTable = sequelize.define('form', {
      id: {
         type: Sequelize.INTEGER(11),
         autoIncrement: true,
         primaryKey: true,
         allowedNull: false
      },
      surveyName: Sequelize.STRING(50),
      category: Sequelize.STRING(50),
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE,
   })
   return formTable;
}

