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

    Ciudad.hasMany(models.Municipio, {

      foreignKey  : 'ciudad_id',
      onDelete    : 'SET NULL'

    })

    Ciudad.belongsTo(models.Estado, {

      foreignKey  :   'estado_id',
      onDelete    :   'CASCADE'

    })

  };

  return Ciudad;

};