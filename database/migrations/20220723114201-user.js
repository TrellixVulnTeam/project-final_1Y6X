'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: 0,
        allowNull: true
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING(191),
        defaultValue: 0,
        allowNull: false
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};