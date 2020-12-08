const Sequelize=require("sequelize");
const sequelize = require("../db/connection");
module.export=sequelize.define('content',{
    id:{
       type:Sequelize.INTEGER(11),
       autoIncrement:true,
       primaryKey:true,
       allowedNull:false
    },
    choicesId:Sequelize.INTEGER(11),
    name:Sequelize.STRING(50),
    question:Sequelize.STRING(50),
});