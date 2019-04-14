'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    return [
      // Add estado_id column
      await queryInterface.addColumn('municipios', 'estado_id', {
                after       : 'municipio',
                type        : Sequelize.INTEGER,
                references  : {
                  model     : 'estados',
                  key       : 'id'
                },
                onUpdate    : 'CASCADE',
                onDelete    : 'SET NULL'
              }
            ),

      // Add ciudad_id column
      await queryInterface.addColumn('municipios', 'ciudad_id', {
                after       : 'municipio',
                type        : Sequelize.INTEGER,
                references  : {
                  model     : 'ciudades',
                  key       : 'id'
                },
                onUpdate    : 'CASCADE',
                onDelete    : 'SET NULL'
              }
            )
    ]
  },

  down: async (queryInterface, Sequelize) => {

    return [
      await queryInterface.removeColumn('municipios', 'estado_id'),
      await queryInterface.removeColumn('municipios', 'ciudad_id')
    ];
  }
};
