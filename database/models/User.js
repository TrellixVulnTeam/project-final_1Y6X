'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    birthday: DataTypes.DATE,
    created_at: 'TIMESTAMP',
    updated_at: 'TIMESTAMP',
    deleted_at: DataTypes.DATE,
  }, {
    tableName: 'users',
    paranoid: true,
    deletedAt: 'deleted_at',
  });

  User.associate = models => {
    User.belongsToMany(models.Role, {
      as: 'roles',
      through: 'role_user',
      foreignKey: 'user_id',
      otherKey: 'role_id',
      timestamps: false
    });
  };
  return User;
};
