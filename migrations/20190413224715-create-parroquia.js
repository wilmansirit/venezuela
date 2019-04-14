'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('parroquias', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parroquia: {
        type: Sequelize.STRING
      },
      municipio_id: {
        type      : Sequelize.INTEGER,
        onDelete  : 'CASCADE',
        references: {
          model   : 'municipios',
          key     : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('parroquias');

  }
};