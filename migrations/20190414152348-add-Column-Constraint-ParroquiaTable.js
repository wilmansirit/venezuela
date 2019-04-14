'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn('parroquias', 'municipio_id', {

          after       : 'parroquia',
          type        : Sequelize.INTEGER,
          references  : {
            model     : 'municipios',
            key       : 'id'
          },
          onUpdate    : 'CASCADE',
          onDelete    : 'SET NULL'

      })

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('parroquias', 'municipio_id')
    
  }
};
