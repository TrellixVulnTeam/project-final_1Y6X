'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('role_user',
      [
        {
          user_id: 1,
          role_id: 1
        },
        {
          user_id: 2,
          role_id: 1
        }
      ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
