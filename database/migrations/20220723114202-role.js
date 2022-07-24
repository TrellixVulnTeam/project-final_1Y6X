'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Roles',
      {
        id: {
          type: Sequelize.INTEGER(11),
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(255),
          defaultValue: false,
          allowNull: false
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
        }
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  }
};