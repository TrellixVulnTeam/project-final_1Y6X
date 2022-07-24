'use strict';

const ProfileService = require('@profile/services/ProfileService');

module.exports = {
   getInformation: async (req, res) => {
      let response = await ProfileService.getInformation(req);
      res.status(response.status).json(response);
   },

   //update profile
   updateInformation: async (req, res) => {
      let response = await ProfileService.updateInformation(req);
      res.status(response.status).json(response);
   },
}