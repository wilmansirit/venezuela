'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('municipios', {

      id: {
        allowNull   : false,
        autoIncrement: true,
        primaryKey  : true,
        type        : Sequelize.INTEGER
      },
      municipio: {
        type        : Sequelize.STRING
      },
      estado_id : {
        type        : Sequelize.INTEGER,
        onDelete    : 'CASCADE',
        references  : {
          model     : 'estados',
          key       : 'id'
        }
      },
      ciudad_id : {
        type        : Sequelize.INTEGER,
        onDelete    : 'CASCADE',
        references  : {
          model     : 'ciudades',
          key       : 'id'
        }
      },
      createdAt: {
        allowNull   : false,
        type        : Sequelize.DATE
      },
      updatedAt: {
        allowNull   : false,
        type        : Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('municipios');

  }
};