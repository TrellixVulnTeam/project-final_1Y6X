'use strict'

const db = require('@models');
const { Op } = require('sequelize');
const CoreUserRepository = require('@core/repositories/CoreUserRepository');
module.exports = {
   updateInformation: async (userId, data) => {
      await db.User.update(
         {
            avatar: data.avatar,
            name: data.data.name,
            birthday: data.data.birthday,
         },
         {
            where: { id: userId },
            returning: true,
            plain: true,
         }
      );

      return await CoreUserRepository.getUserById(userId);
   },

   getInformation: async (userId) => {
      return await db.User.findOne({
         where: { id: userId },
         raw: true
      })
   }
}
