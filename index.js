const express = require('express');
const { config } = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const app = express();

const { transaction } = require('./util/mongoose');
const Product = require('./Product/Product.model');

config();

app.use(cors());
app.use(json());

app.use('/', async (req, res) => {
  const products = await transaction('products', () => {
    return Product.find();
  });

  res.send(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
