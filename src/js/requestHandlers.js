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
var fs = __importStar(require("fs"));
var formidable = __importStar(require("formidable"));
function start(rsp, req) {
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
function index(rsp) {
    console.log('Index be called');
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" ' +
        'method="post">' +
        '<input type="file" name="upload" multiple="multiple">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';
    rsp.writeHead(200, { "Content-Type": "text/html" });
    rsp.write(body);
    rsp.end();
}
exports.index = index;
function upload(rsp, req) {
    console.log('RequestHandler upload was called');
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req, function (error, fields, files) {
        console.log("parsing done");
        if (error) {
            rsp.writeHead(500, { "Content-Type": "text/plain" });
            rsp.write(error + '\n');
            rsp.end();
        }
        else {
            fs.renameSync(files.upload.path, "tmp/1.jpg");
            rsp.writeHead(200, { "Content-Type": "text/html" });
            rsp.write("received image:<br/>");
            rsp.write("<img src='/show' />");
            rsp.end();
        }
    });
}
exports.upload = upload;
function download(rsp, postBody) {
    console.log('RequestHandler download was called');
    rsp.writeHead(200, { "Content-Type": "text/plain" });
    rsp.write('Hello Download');
    rsp.end();
}
exports.download = download;
function show(rsp, postBody) {
    fs.readFile("/tmp/1.jpg", "binary", function (err, data) {
        if (err) {
            rsp.writeHead(500, { "Content-Type": "text/plain" });
            rsp.write(err + '\n');
            rsp.end();
        }
        else {
            rsp.writeHead(200, { "Content-Type": "image/jpg" });
            rsp.write(data, "binary");
            rsp.end();
        }
    });
}
exports.show = show;
