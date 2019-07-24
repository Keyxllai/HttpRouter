const express = require("express");
const app = express();

const productRouters = require("./api/routers/products");
const orderRouters = require("./api/routers/orders");

app.use('/products', productRouters);
app.use('/orders', orderRouters);

module.exports = app;