var jade = require('jade');

function start(response) {
  console.log("--- Обработка запроса 'start'".blue.bold);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(jade.renderFile('./views/index.jade'));
    response.end();
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;