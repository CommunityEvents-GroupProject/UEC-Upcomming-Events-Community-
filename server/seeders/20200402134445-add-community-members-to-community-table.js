'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Communities', [{
    name: 'movie-community',
    UserId: 1,
    EventId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'sport-community',
    UserId: 2,
    EventId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'traveling-community',
    UserId: 3,
    EventId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Communities', null, {});

  }
};
