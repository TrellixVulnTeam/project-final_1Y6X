'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles',
      [
        {
          name: 'admin',
        },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
  }
};
