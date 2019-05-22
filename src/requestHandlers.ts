import * as child from "child_process";
import * as querystring from "querystring";
import * as fs from "fs";
import { ServerResponse } from "http";


export function start(rsp:ServerResponse, postBody:any){
    console.log('RequestHandler start was called');

    let content = 'empty';
    child.exec("find /",
    { timeout:10000, maxBuffer:20000*1024},
    function(error, stdout, stderr){
      rsp.writeHead(200,{"Content-Type":"text/plain"});
      rsp.write(stdout);
      rsp.end();
    });
    return content;
}

export function index(rsp: ServerResponse, postBody:any){
    console.log('Index be called');

    var body ='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<br/>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    rsp.writeHead(200,{"Content-Type":"text/html"});
    rsp.write(body);
    rsp.end();
}

export function upload(rsp:ServerResponse, postBody:any){
    console.log('RequestHandler upload was called');
    rsp.writeHead(200,{"Content-Type":"text/plain"});
    rsp.write("U send body: " + querystring.parse(postBody).text);
    rsp.end();
}

export function download(rsp:ServerResponse, postBody:any){
    console.log('RequestHandler download was called');
    rsp.writeHead(200,{"Content-Type":"text/plain"});
    rsp.write('Hello Download');
    rsp.end();
}

export function show(rsp:ServerResponse, postBody:any){
    fs.readFile("/tmp/1.jpg","binary",function(err,data){
        if(err){
            rsp.writeHead(500,{"Content-Type":"text/plain"});
            rsp.write(err + '\n');
            rsp.end();
        }
        else{
            rsp.writeHead(200,{"Content-Type":"image/jpg"});
            rsp.write(data,"binary");
            rsp.end();
        }
    })
}