const express = require('express');
const app = express();

const { PORT = 3003 } = process.env;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
}) 