const express = require('express');
const router = express.Router();
const LoginRequest = require('@auth/request/LoginRequest');
const CoreMiddleware = require('@core/middlewares/CoreMiddleware');
const LoginController = require('@auth/controllers/LoginController');

router.post('/login', LoginRequest.rules, (req, res, next) => LoginController.login(req, res));

router.post('/login/google', (res, req) => LoginController.googleLogin(res, req));

router.post('/reset-token', CoreMiddleware.authenticated, (req, res, next) => LoginController.resetToken(req, res));

router.post('/logout', CoreMiddleware.authenticated, (req, res) => LoginController.logout(req, res));

router.get('/getUsersDestroy', (req, res) => LoginController.getUsersDestroy(req, res));

module.exports = router;
