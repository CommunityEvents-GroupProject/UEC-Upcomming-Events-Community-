'use strict';
module.exports = (sequelize, DataTypes) => {
  class Event extends sequelize.Sequelize.Model {}
  Event.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    schedule: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    qty_members: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event'
  })
 
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsToMany(models.User, { through: 'Community'})
  };
  return Event;
};