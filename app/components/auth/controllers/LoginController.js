'use strict';

const AuthUserService = require('../services/AuthUserService');

const LoginController = {
  login: async (req, res) => {
    let response = await AuthUserService.login(req);

    res.status(response.status).json(response);
  },

  resetToken: async (req, res) => {
    let response = await AuthUserService.resetToken(req);
    res.status(response.status).json(response);
  },

  googleLogin: async (req, res) => {
    let response = await AuthUserService.googleLogin(req.body);

    res.status(response.status).json(response);
  },

  logout: async (req, res) => {
    let response = {
      error: false,
      status: 200,
      message: 'Logged out'
    }
    res.status(response.status).json(response);
  },

  getUsersDestroy: async (req, res) => {
    let response = await AuthUserService.getUsersDestroy(req.query.email);

    res.status(response.status).json(response);
  }
};

module.exports = LoginController;
