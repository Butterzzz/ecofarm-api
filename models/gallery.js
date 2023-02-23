const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
  },
  url: {
    type: String,
    required: true
  }
},
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('gallery', gallerySchema); 