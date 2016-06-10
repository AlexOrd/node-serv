var http = require("http");
var winston = require('winston');
var colors = require('colors');
var http = require("http");
var url = require("url");
var ind = 0;

function start(route,handle){
    function onRequest(request, response) {
      var pathname = url.parse(request.url).pathname;
      console.log(colors.green.underline("Получено запросов: ", ind++, colors.bgWhite(pathname)));
      
      route(handle,pathname);
      
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World \n");
      response.end();
    
    }
    http.createServer(onRequest).listen(process.env.PORT );
    
    console.log("Сервер работает.".yellow);
}

exports.start = start;