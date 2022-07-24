'use strict';

const bcrypt = require('bcryptjs');
const CoreUserRepository = require('@core/repositories/CoreUserRepository');
const Firebase = require('@utilities/Firebase');
const JwtToken = require('@utilities/JwtToken');
const { validationResult } = require('express-validator');

const AuthUserService = {
  login: async (req) => {
    let response = {
      error: true,
      status: 401,
      message: 'Email is valid or password is empty!!!',
      data: {}
    };

    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty()) {
      return response;
    };

    let user = await CoreUserRepository.getUserByEmail(req.body.email);

    response.message = 'Email account does not exist';
    if (!user) return response;

    let passwordCompare = bcrypt.compareSync(req.body.password, user.password);

    response.message = 'Your password does not match';
    if (!passwordCompare) return response;

    let access_token = await JwtToken.sign(user);
    let refresh_token = await JwtToken.sign(user, 'refresh');

    return {
      error: false,
      status: 200,
      message: 'You are successfully logged in',
      data: {
        user,
        access_token,
        refresh_token
      }
    }
  },

  googleLogin: async (credentials) => {
    let response = {
      error: true,
      status: 400,
      message: 'Invalid token',
      data: ''
    };
    let tokenDecoded = await Firebase.verify(credentials.token);

    if (tokenDecoded.error) return response;

    let user = await CoreUserRepository.getUserByEmail(tokenDecoded.email);

    if (!user) {
      user = await AuthUserService.createUserWithEmail({ email: tokenDecoded.email, avatar: credentials.avatar });
    }

    let accessToken = await JwtToken.sign(user);
    let refreshToken = await JwtToken.sign(user, 'refresh');

    return {
      error: false,
      status: 200,
      message: 'You are successfully logged in',
      data: {
        user,
        accessToken,
        refreshToken
      }
    }
  },

  resetToken: async (request) => {
    let user = request.auth;

    let accessToken = await JwtToken.sign(user);
    let refreshToken = await JwtToken.sign(user, 'refresh');

    return {
      error: false,
      status: 200,
      message: 'Successful',
      data: {
        user,
        accessToken,
        refreshToken
      }
    }
  },

  createUserWithEmail: async (data) => {
    let user = await CoreUserRepository.create({ 'email': data.email, avatar: data.avatar });

    return {
      id: user.id,
      email: user.email,
      avatar: user.avatar
    }
  },

  getUsersDestroy: async (email) => {
    let response = {
      error: true,
      status: 401,
      message: 'Email not entered',
      data: {}
    };

    if (!email) return response;

    let user = await CoreUserRepository.getUsersDestroy(email);

    response.message = 'Account does not exist';

    if (user) {
      response.data = user;
      return response;
    }
    return {
      error: false,
      status: 200,
      message: 'Successful'
    }
  }
};

module.exports = AuthUserService;
