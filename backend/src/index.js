const cors = require('cors');
const express = require('express');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.listen(process.env.PORT ? process.env.PORT : 8000, () => {
    console.log(`listening at ${process.env.PORT ? process.env.PORT : 8000}`);
});

module.exports = app;