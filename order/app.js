const express = require("express");
const app = express();
const morgan = require("morgan")
const FileStreamRotator = require("file-stream-rotator");
const fs = require("fs");
const path = require('path');

var bodyParser = require("body-parser");
// 跨域
var cors = require("cors");

logDir = path.join(__dirname,"log");

const productRouters = require("./api/routers/products");
const orderRouters = require("./api/routers/orders");

fs.existsSync(logDir) || fs.mkdirSync(logDir);

//var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
morgan.format('dev', '[order] :method :url :status :response-time ms - :res[content-length]');

var accessLogStream = FileStreamRotator.getStream({
    date_format:"YYYYMMDD",
    filename:path.join(logDir,"access-%DATE%.log"),
    frequency:"daily",
    verbose:false
});
app.use(morgan("dev",{stream: accessLogStream}));

app.use(bodyParser.json({
    limit: '5000mb'
}));     //解析JSON格式
app.use(bodyParser.urlencoded({
    limit: '5000mb',
    extended: true
}));   //解析文本格式

app.use(cors);

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