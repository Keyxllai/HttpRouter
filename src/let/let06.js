var express = require("express");
//请求体解析中间件
var bodyParser = require("body-parser");
// 跨域
var cors = require("cors");

var app = express();
app.use(bodyParser.json({
    limit: '5000mb'
}));     //解析JSON格式
app.use(bodyParser.urlencoded({
    limit: '5000mb',
    extended: true
}));   //解析文本格式

app.use(cors());

app.set('port',1300);

app.get("/addons",function(req,res){
    console.log('Get Request Body: '+ req.body);
    res.write("GET ok");
    res.end();
})


app.post("/addons",function(req,res){
    console.log('POST Request Body: '+ req.body);
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("POST ok \n");
    res.write("receive body: "+ JSON.stringify(req.body));
    res.end();
})

app.listen(1300, function(){
    console.log("Express Server started on Port: ." + app.get('port'))
})

