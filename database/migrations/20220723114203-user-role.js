'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'role_user',
      {
        id: {
          type: Sequelize.INTEGER(11),
          primaryKey: true,
          autoIncrement: true
        },
        user_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          },
        },
        role_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id'
          },
        }
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('role_user');
  }
};
