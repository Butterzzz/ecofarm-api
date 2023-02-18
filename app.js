require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors.js');
const router = require('./routes/index.js');

const { PORT = 3003 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/ecofarmdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.use(express.json()); // middleware (парсер данных)

app.use(cors);
app.use(router);

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`)
});