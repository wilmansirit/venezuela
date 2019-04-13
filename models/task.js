'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {});
  Task.associate = function(models) {
    
    Task.belongsTo(models.Context, {
      foreignKey: 'ContextId',
      onDelete: 'CASCADE'
    });

  };
  return Task;
};