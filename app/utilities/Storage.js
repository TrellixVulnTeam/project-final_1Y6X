'use strict'

const path = require('path');
const multer = require('multer');
const appConfig = require('@config/app');

const Storage = {

    isValidFile: (file) => {
        console.log("valid" + file);
    },

    storage: (folder) => {

        return multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, appConfig.uploadDestination);
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + path.extname(file.originalname));
            }
        });
    },

    upload: (folder) => {
        let storage = Storage.storage(folder);

        return multer({
            storage: storage
        })
    }
}

module.exports = Storage;


