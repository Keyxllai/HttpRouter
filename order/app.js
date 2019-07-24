const express = require("express");
const app = express();

const productRouters = require("./api/routers/products");

app.use('/products', productRouters);

module.exports = app;