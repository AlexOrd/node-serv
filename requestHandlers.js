var jade = require('jade');
var querystring = require("querystring");


function start(response) {
  console.log("--- Обработка запроса 'start'".blue.bold);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(jade.renderFile('./views/index.jade'));
    response.end();
}

function upload(response, postData) {
  console.log("--- Обработка запроса 'upload'".blue.bold);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Upload: " + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;