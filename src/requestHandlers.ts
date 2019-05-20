import * as child from "child_process";
import { ServerResponse } from "http";


export function start(rsp:ServerResponse){
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

export function upload(rsp:ServerResponse){
    console.log('RequestHandler upload was called');
    rsp.writeHead(200,{"Content-Type":"text/plain"});
    rsp.write('Hello Upload');
    rsp.end();
}

export function download(rsp:ServerResponse){
    console.log('RequestHandler download was called');
    rsp.writeHead(200,{"Content-Type":"text/plain"});
    rsp.write('Hello Download');
    rsp.end();
}