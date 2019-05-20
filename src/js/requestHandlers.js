"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function start() {
    console.log('RequestHandler start was called');
    return "Hello Start";
}
exports.start = start;
function upload() {
    console.log('RequestHandler upload was called');
    return "Hello Upload";
}
exports.upload = upload;
function download() {
    console.log('RequestHandler download was called');
    return "Hello Download";
}
exports.download = download;
