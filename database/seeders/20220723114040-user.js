'use strict';

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@gmail.com',
        avatar: '/uploads/avatars/1657698413073.jpg',
        name: 'admin',
        password: bcrypt.hashSync('123456', salt),
        birthday: '2022-06-10',
      },
      {
        email: 'buithinh2507@gmail.com',
        avatar: '/uploads/avatars/1657698413073.jpg',
        name: 'admin',
        password: bcrypt.hashSync('123456', salt),
        birthday: '2001-05-02',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
