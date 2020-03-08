
'use strict';

const cloudinary = require('cloudinary');
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

const ImageStore = {
    configure: function() {
        const credentials = {
            cloud_name: "drl4tdtjm",
            api_key: "533142898429918",
            api_secret: "4IgCzQm2GpWzABF6fRI0Ygfe6YI"
        };
        cloudinary.config(credentials);
    },

    getAllImages: async function() {
        const result = await cloudinary.v2.api.resources();
        return result.resources;
    },



    deleteImage: async function(id) {
        await cloudinary.v2.uploader.destroy(id, {});
    },






};

module.exports = ImageStore;
