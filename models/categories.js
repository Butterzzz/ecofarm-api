const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
    }
},
    {
        versionKey: false,
    },
);

module.exports = mongoose.model('categories', categoriesSchema); 