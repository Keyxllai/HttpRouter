const express = require("express");
const app = express();
const morgan = require("morgan")

const productRouters = require("./api/routers/products");
const orderRouters = require("./api/routers/orders");

app.use(morgan("dev"));

app.use('/products', productRouters);
app.use('/orders', orderRouters);

app.use((req, res, next) => {
    let error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:error.message
    })

});

module.exports = app;