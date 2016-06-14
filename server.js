var http = require("http")
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
      
      request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      countData++;
      postData += postDataChunk;
      console.log("- Получены POST данные: ".blue.bold + countData + " часть" + " '" + String(postDataChunk).yellow + "'.");
      
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });
  }
    http.createServer(onRequest).listen(process.env.PORT );
    
    console.log("Сервер работает.".yellow);
}

exports.start = start;