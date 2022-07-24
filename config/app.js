'use strict';

const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
   port: process.env.APP_PORT,
   url: process.env.APP_URL || 'http://localhost',
   clientURL: process.env.CLIENT_URL || 'http://localhost:3000',
   env: process.env.APP_ENV || 'development',
   uploadDestination: process.env.UPLOAD_DESTINATION || 'public/uploads/avatars'
};

