'use strict';
module.exports = (sequelize, DataTypes) => {
  class Community extends sequelize.Sequelize.Model {}
  Community.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    EventId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Events',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Community'
  })

  Community.associate = function(models) {
    // associations can be defined here
    Community.belongsTo(models.User, { foreignKey: 'UserId', targetKey: 'id'})
    Community.belongsTo(models.Event, { foreignKey: 'EventId', targetKey: 'id'})
  };
  return Community;
};