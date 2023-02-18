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

// Определение схемы для заказа
const orderSchema = new mongoose.Schema(
  {
    products: [productSchema],
    totalPrice: Number,
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false,
  }
);

// Создание модели для продукта
module.exports = mongoose.model('Product', productSchema);

// Создание модели для заказа
module.exports = mongoose.model('Order', orderSchema);