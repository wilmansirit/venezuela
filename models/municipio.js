'use strict';

module.exports = (sequelize, DataTypes) => {

  const Municipio = sequelize.define('Municipio', {

    municipio: DataTypes.STRING

  }, {

    freezeTableName : true,
    tableName       : 'municipios'

  });

  Municipio.associate = function(models) {

    Municipio.hasMany(models.Parroquia, {

      foreignKey  : 'municipio_id',
      onDelete    : 'CASCADE'

    });

    Municipio.belongsTo(models.Estado, {

      foreignKey  : 'estado_id',
      onDelete    : 'CASCADE'

    });

    Municipio.belongsTo(models.Ciudad, {

      foreignKey  : 'ciudad_id',
      onDelete    : 'CASCADE'
      
    })

  };

  return Municipio;

};