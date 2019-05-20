
export function route(handle:any, pathName:string){
    console.log('route for pathname:'+pathName);
    if(typeof handle[pathName] === 'function'){
        return handle[pathName]();
    }
    else{
        console.log('No request handle for '+ pathName)
        return "404 Not Found"
    }
}