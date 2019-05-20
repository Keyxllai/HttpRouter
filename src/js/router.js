"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function route(handle, pathName) {
    console.log('route for pathname:' + pathName);
    if (typeof handle[pathName] === 'function') {
        return handle[pathName]();
    }
    else {
        console.log('No request handle for ' + pathName);
        return "404 Not Found";
    }
}
exports.route = route;
