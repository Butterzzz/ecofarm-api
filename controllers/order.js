const Order = require('../models/order');
const nodemailer = require('nodemailer');
const { USER, PASS } = process.env;

// Обработчик GET-запроса для получения информации о всех заказах
module.exports.getOrders = (req, res, next) => {
  Order.find({})
    .then(order => res.send(order))
    .catch(next);
};

// Обработчик POST-запроса для сохранения информации о заказе
module.exports.createOrder = (req, res) => {
  const { products } = req.body;
  const totalPrice = products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // console.log('Получен новый заказ:', { products, totalPrice });

  // Сохранение заказа в базу данных
  const order = new Order({ products, totalPrice });
  order.save()
    .then(() => {
      console.log('Заказ успешно сохранен в базе данных');
    })
    .catch((error) => {
      console.error('Ошибка при сохранении заказа в базе данных', error);
    });

  // Шаблон для письма
  const orderListHtml = products.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.quantity} шт.</td>
      <td>${item.price} руб.</td>
      <td>${item.quantity * item.price} руб.</td>
    </tr>
  `).join('');

  const totalPriceHtml = `
    <tr>
      <td colspan="3"><strong>Итого:</strong></td>
      <td><strong>${totalPrice} руб.</strong></td>
    </tr>
  `;

  // Отправка уведомления о заказе на email
  // Создаем объект транспорта для отправки почты через SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: USER,
      pass: PASS,
    }
  });

  // Опции отправки письма
  const mailOptions = {
    from: 'EcoFarm <Butters-blg@yandex.ru>',
    to: 'butters.blaga@gmail.com',
    subject: 'Новый заказ на сайте EcoFarm',
    html: `
    <p>Список товаров в заказе:</p>
    <table>
      <thead>
        <tr>
          <th>Товар</th>
          <th>Количество</th>
          <th>Цена</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        ${orderListHtml}
        ${totalPriceHtml}
      </tbody>
    </table>
  `
  };

  // Отправка письма
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка при отправке уведомления', error);
    } else {
      console.log('Уведомление успешно отправлено', info.response);
    }
  });

  // Отправка ответа клиенту
  res.json({ message: 'Заказ успешно обработан' });

};

// Обработчик DELETE-запроса
module.exports.deleteOrder = (req, res) => {
  Order.findByIdAndRemove(req.params.cardId)
    .then(() => res.send({ message: 'Заказ успешно удален' }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};