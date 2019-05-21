import { ServerResponse } from "http";

export function route(handle:any, pathName:string, rsp: ServerResponse, postData: any){
    console.log('route for pathname:'+pathName);
    if(typeof handle[pathName] === 'function'){
        handle[pathName](rsp, postData);
    }
    else{
        console.log('No request handle for '+ pathName)
        rsp.writeHead(404,{"Content-Type":"text/plain"});
        rsp.write('404 Not Found');
        rsp.end();
    }
}