"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var url = __importStar(require("url"));
function start(route, handle) {
    function onRequest(req, rsp) {
        // 请注意，可能会输出两次“request received.”。
        // 那是因为大部分服务器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico 
        var pathname = url.parse(req.url).pathname;
        var content = route(handle, pathname);
        console.log('request received. PathName:' + pathname);
        rsp.writeHead(200, { "Content-Type": "text/plain" });
        rsp.write(content);
        rsp.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server started .');
}
exports.start = start;
