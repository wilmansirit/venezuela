'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('ciudades', {
      id            : {
        allowNull   : false,
        autoIncrement: true,
        primaryKey  : true,
        type        : Sequelize.INTEGER
      },
      ciudad        : {
        type        : Sequelize.STRING
      },
      capital       : {
        type        : Sequelize.BOOLEAN
      },
      estado_id     : {
        type        : Sequelize.INTEGER,
        onDelete    : 'CASCADE',
        references  : {
          model     : 'estados',
          key       : 'id'
        }
      },
      createdAt     : {
        allowNull   : false,
        type        : Sequelize.DATE
      },
      updatedAt     : {
        allowNull   : false,
        type        : Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('ciudades');

  }
};