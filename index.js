var server = require("./server");
var router = require("./routes");
var requestHandlers = require("./requestHandlers");

// hash of routes
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);