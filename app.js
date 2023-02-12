const express = require('express');
const cors = require('./middlewares/cors.js');
const router = require('./routes/index.js');

const { PORT = 3003 } = process.env;
const app = express();

app.use(express.json()); // middleware (парсер данных)
app.use(cors);
app.use('/catalog', router);

app.listen(PORT, () => {
    console.log(`Сервер слушает порт ${PORT}`)
});