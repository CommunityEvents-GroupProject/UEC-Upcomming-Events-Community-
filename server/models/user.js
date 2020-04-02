'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  })

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Event, { through: 'Community'})
  };
  return User;
};