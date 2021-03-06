import * as server from './server'
import * as router from "./router"
import * as requestHandler from "./requestHandlers";

let handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
handle["/download"] = requestHandler.download;
handle["/index"] = requestHandler.index;
handle["/show"] = requestHandler.show;

server.start(router.route, handle);