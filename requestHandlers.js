function start(response) {
  console.log("Запрос 'start'.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Start");
    response.end();
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;