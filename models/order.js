const mongoose = require('mongoose');

// Определение схемы для продукта в заказе
const productSchema = new mongoose.Schema({
  cardId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
},
  {
    versionKey: false,
  },
);

// Создание модели для продукта
module.exports = mongoose.model('Product', productSchema); 

// Определение схемы для заказа
const orderSchema = new mongoose.Schema({
  products: [productSchema],
});

// Создание модели для заказа
module.exports = mongoose.model('Order', orderSchema);