'use strict';

const ProfileRepository = require('@profile/repositories/ProfileRepository');

let defaultResponse = {
   error: true,
   status: 400,
   message: 'Bad request',
   data: ''
};

module.exports = {
   updateInformation: async (req) => {
      let userId = req.auth.id;

      console.log(userId);

      if (!req.file) return defaultResponse;

      let escapeCharacter = 'public';
      let filename = req.file.destination.substring(escapeCharacter.length, req.file.destination.length) + '/' + req.file.filename;

      let user = await ProfileRepository.updateInformation(userId, { avatar: filename, data: req.body })

      return {
         error: false,
         status: 201,
         message: 'uploaded',
         data: user
      }
   },

   getInformation: async (req) => {
      let userId = req.auth.id;

      let user = await ProfileRepository.getInformation(userId);

      return {
         error: false,
         status: 201,
         message: 'uploaded',
         data: user
      }
   }
}