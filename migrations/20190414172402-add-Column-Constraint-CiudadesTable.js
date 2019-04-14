'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('ciudades', 'estado_id', {

          after       : 'capital',
          type        : Sequelize.INTEGER,
          references  : {
            model     : 'estados',
            key       : 'id'
          },
          onUpdate    : 'CASCADE',
          onDelete    : 'SET NULL'
          
        })

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('ciudades', 'estado_id')

  }
};
