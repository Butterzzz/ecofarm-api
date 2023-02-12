const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  isHit: {
    type: Boolean,
  },
  isSale: {
    type: Boolean,
  },
  isNew: {
    type: Boolean,
  }
},
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('card', cardSchema); 