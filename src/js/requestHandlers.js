"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var child = __importStar(require("child_process"));
function start(rsp) {
    console.log('RequestHandler start was called');
    var content = 'empty';
    child.exec("find /", { timeout: 10000, maxBuffer: 20000 * 1024 }, function (error, stdout, stderr) {
        rsp.writeHead(200, { "Content-Type": "text/plain" });
        rsp.write(stdout);
        rsp.end();
    });
    return content;
}
exports.start = start;
function upload(rsp) {
    console.log('RequestHandler upload was called');
    rsp.writeHead(200, { "Content-Type": "text/plain" });
    rsp.write('Hello Upload');
    rsp.end();
}
exports.upload = upload;
function download(rsp) {
    console.log('RequestHandler download was called');
    rsp.writeHead(200, { "Content-Type": "text/plain" });
    rsp.write('Hello Download');
    rsp.end();
}
exports.download = download;
