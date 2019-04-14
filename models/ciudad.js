'use strict';

module.exports = (sequelize, DataTypes) => {

  const Ciudad = sequelize.define('Ciudad', {

    ciudad: DataTypes.STRING,
    capital: DataTypes.BOOLEAN

  }, {

    freezeTableName : true,
    tableName       : 'ciudades'

  });

  Ciudad.associate = function(models) {

    Ciudad.belongsTo(models.Estado, {

      foreignKey  :   'estado_id',
      onDelete    :   'CASCADE'

    })

  };

  return Ciudad;

};