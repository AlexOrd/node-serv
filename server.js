var  http = require('http')
, sys = require('sys')
, winston = require('winston')
, colors = require('colors')
, url = require("url")
, ind_req = 0; // indexes of routes

function start(route, handle){
    function onRequest(request, response) {
      var postData = "";
      var countData = 0;
      var pathname = url.parse(request.url).pathname;
       
      console.log(colors.green.underline("Получено запросов ", ind_req++, pathname));
      
      route(handle, pathname, response, request);
      
  }
    http.createServer(onRequest).listen(process.env.PORT );
    
    console.log("Сервер работает.".yellow);
}

exports.start = start;