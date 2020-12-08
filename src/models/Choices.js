const Sequelize=require("sequelize");
const sequelize = require("../db/connection");
module.export=sequelize.define('choices',{
    id:{
       type:Sequelize.INTEGER(11),
       autoIncrement:true,
       primaryKey:true,
       allowedNull:false
    },
    index: Sequelize.INTEGER(11),
    formId:  Sequelize.INTEGER(11),
    name:Sequelize.STRING(50),
    question:Sequelize.STRING(50),
    Choice1:Sequelize.STRING(50),
    Choice2:Sequelize.STRING(50),
    Choice3:Sequelize.STRING(50),
    Choice4:Sequelize.STRING(50),
});