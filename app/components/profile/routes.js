const express = require('express');
const router = express.Router();

const ProfileController = require('./controllers/ProfileController');
const CoreMiddleware = require('@core/middlewares/CoreMiddleware');
const Storage = require('@utilities/Storage');

router.get('/', CoreMiddleware.authenticated, (req, res, next) => ProfileController.getInformation(req, res));
router.put('/update', [CoreMiddleware.authenticated, Storage.upload('avatar').single('avatar')], (req, res, next) => ProfileController.updateInformation(req, res));

module.exports = router;
