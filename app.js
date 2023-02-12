const express = require('express');
const router = require('./routes/index.js');

const { PORT = 3003 } = process.env;
const app = express();

app.use('/catalog', router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});