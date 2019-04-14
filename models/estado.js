'use strict';

module.exports = (sequelize, DataTypes) => {

  const Estado = sequelize.define('Estado', {

    estado: DataTypes.STRING,
    iso_3166_2: DataTypes.STRING

  }, {

    freezeTableName : true,
    tableName       : 'estados' 

  });

  Estado.associate = function(models) {

    Estado.hasMany(models.Municipio, {
      foreignKey  : 'estado_id',
      onDelete    : 'CASCADE'
    });

    Estado.hasMany(models.Ciudad, {

      foreignKey  : 'estado_id',
      onDelete    : 'CASCADE'

    })

  };

  return Estado;

};