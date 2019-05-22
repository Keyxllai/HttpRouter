import * as child from "child_process";
import * as querystring from "querystring";
import * as fs from "fs";
import * as formidable from "formidable";
import { ServerResponse,IncomingMessage } from "http";


export function start(rsp:ServerResponse, req:IncomingMessage){
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

export function index(rsp: ServerResponse){
    console.log('Index be called');

    var body ='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
    rsp.writeHead(200,{"Content-Type":"text/html"});
    rsp.write(body);
    rsp.end();
}

export function upload(rsp:ServerResponse, req:IncomingMessage){
    console.log('RequestHandler upload was called');
    
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req,function(error,fields,files){
        console.log("parsing done");
        if(error){
            rsp.writeHead(500,{"Content-Type":"text/plain"});
            rsp.write(error + '\n');
            rsp.end();
        }else{
            fs.renameSync(files.upload.path,"tmp/1.jpg")
            rsp.writeHead(200,{"Content-Type":"text/html"});
            rsp.write("received image:<br/>");
            rsp.write("<img src='/show' />");
            rsp.end();
        }
    })
    
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