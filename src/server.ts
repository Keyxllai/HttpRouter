import * as http from "http";

import * as url from "url";
import { ServerResponse } from "http";
import { IncomingMessage } from "http";

export function start(route:any, handle:any){
    function onRequest(req:IncomingMessage,rsp:ServerResponse){
        // 请注意，可能会输出两次“request received.”。
        // 那是因为大部分服务器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico 
        var pathname = url.parse(req.url?req.url.toString():'').pathname;

        var postBody = '';

        console.log('request received. PathName:' + pathname);
        
        req.setEncoding('utf8'); //设置接受数据编码格式为UTF-8
        
        req.addListener('data',function(chunk:any){
            postBody += chunk;
            console.log('Received POST body [' + chunk + "].");
        });

        req.addListener('end', function(){
            route(handle, pathname, rsp, req);
        });
    }
    
    http.createServer(onRequest).listen(8888);
    
    console.log('Server has started.');
}