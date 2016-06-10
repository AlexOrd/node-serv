var http = require("http")
, winston = require('winston')
, colors = require('colors')
, url = require("url")
, ind = 0;

function start(route,handle){
    function onRequest(request, response) {
      var pathname = url.parse(request.url).pathname;
      console.log(colors.green.underline("Получено запросов: ", ind++, colors.bgWhite(pathname)));
      
      route(handle, pathname, response);
  }
    http.createServer(onRequest).listen(process.env.PORT );
    
    console.log("Сервер работает.".yellow);
}

exports.start = start;