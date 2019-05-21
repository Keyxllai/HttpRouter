"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var server = __importStar(require("./server"));
var router = __importStar(require("./router"));
var requestHandler = __importStar(require("./requestHandlers"));
var handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
handle["/download"] = requestHandler.download;
handle["/index"] = requestHandler.index;
server.start(router.route, handle);
