'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try{
      await queryInterface.createTable("form",{
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
      });
      await queryInterface.createTable("content",{
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
      await queryInterface.createTable("choices",{
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
      return Promise.resolve();
    }catch(err){
      return Promise.reject(err);
    }      
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('form');
      await queryInterface.dropTable('content');
      await queryInterface.dropTable('choices');
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  
  }
};
