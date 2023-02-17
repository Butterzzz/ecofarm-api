const Order = require('../models/order');

module.exports.getOrders = (req, res, next) => {
  Order.find({})
    .then(order => res.send(order))
    .catch(next);
};

// Обработчик POST-запроса для сохранения информации о заказе
module.exports.createOrder = (req, res) => {
  const products = req.body.products;

  // Здесь вы можете сохранить информацию о заказе в базе данных или отправить ее на почту, например.
  // В этом примере мы просто выводим информацию о заказе в консоль.
  console.log('Получен новый заказ:', products);

  // Создание нового заказа на основе полученных данных
  const newOrder = new Order({
    products: products,
  });

  // Сохранение заказа в базе данных
  newOrder.save((err) => {
    if (err) {
      console.error('Ошибка при сохранении заказа', err);
      res.status(500).send('Ошибка при сохранении заказа');
    } else {
      console.log('Заказ успешно создан:', newOrder);
      res.send('Заказ успешно создан!');
    }
  });


  // Order.create()
  //   .then(newOrder => res.send(newOrder))
  //   .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.deleteOrder = (req, res) => {
  Order.findByIdAndRemove(req.params.cardId)
    .then(() => res.send({ message: 'Заказ успешно удален' }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};