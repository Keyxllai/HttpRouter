import * as http from "http";

import * as url from "url";
import { ServerResponse } from "http";

export function start(route:any, handle:any){
    function onRequest(req:any,rsp:ServerResponse){
        // 请注意，可能会输出两次“request received.”。
        // 那是因为大部分服务器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico 
        var pathname = url.parse(req.url).pathname;

        route(handle, pathname, rsp);

        console.log('request received. PathName:' + pathname);
        // rsp.writeHead(200,{"Content-Type":"text/plain"});
        // rsp.write(content);
        // rsp.end();
    }
    
    http.createServer(onRequest).listen(8888);
    
    console.log('Server has started.');
}