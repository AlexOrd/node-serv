var server = require("./server");
var router = require("./routes");
var requestHandlers = require("./requestHandlers");

// list of routes
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);