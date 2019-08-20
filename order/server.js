const http = require("http");

const app = require('./app')


const port = process.env.PORT || 3000;
console.log("process.env.PORT:" + process.env.PORT);

http.createServer(app).listen(port);

console.log("Server is started..."+ port)