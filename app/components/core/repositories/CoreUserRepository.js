'use strict';

const User = require('@models').User;
const db = require('@models');
const { Op } = require('sequelize');
const uuid = require('uuid');

const UserRepository = {
  getAllUser: async () => {
    let allUser = await User.findAll({ raw: true });
    return allUser;
  },

  getUserByEmail: async (email) => {
    return await User.findOne({
      where: {
        email
      },
      include: [
        {
          model: db.Role,
          as: 'roles'
        }
      ],
      raw: true
    });
  },

  getUserById: async (id) => {
    return await User.findOne({
      where: {
        id: id,
      },
      raw: true,
    });
  },

  findByIdWithRaw: async (id) => {
    return await User.findOne({
      where: {
        id
      },
      include: [
        {
          model: db.Role,
          as: 'roles'
        }
      ],
      raw: true
    })
  },

  create: async (user) => {
    return user = await User.create(user);
  },

  getUsersDestroy: async (email) => {
    return await User.findOne({
      where: {
        [Op.and]: [
          { email: email },
          { deleted_at: { [Op.not]: null } }
        ],
      },
      paranoid: false,
      raw: true,
    });
  },
};

module.exports = UserRepository;
