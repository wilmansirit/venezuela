'use strict';

module.exports = (sequelize, DataTypes) => {

  const Parroquia = sequelize.define('Parroquia', {

    parroquia: DataTypes.STRING

  }, {

    freezeTableName : true,
    tableName       : 'parroquias'

  });

  Parroquia.associate = function(models) {

    Parroquia.belongsTo(models.Municipio, {

      foreignKey  : 'municipio_id',
      onDelete    : 'SET NULL',
      onUpdate    : 'CASCADE'

    });

  };

  return Parroquia;

};