var formidable = require('formidable')
 , jade = require('jade')
 , querystring = require("querystring")
 , fs = require("fs");


function start(response) {
  console.log("--- Обработка запроса 'start'".blue.bold);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(jade.renderFile('./views/index.jade'));
    response.end();
}

function upload(response, request) {
  console.log("--- Обработка запроса 'upload'".blue.bold);
  
  var form = new formidable.IncomingForm();
  console.log("--- Разбивка файла".yellow);
  
  form.parse(request, function(error, fields, files) {
  	console.log("--- Файл разбит".yellow);
  
  	fs.rename(files.upload.path, "/tmp/test.png", function(err) {
  	  if (err) {
  		fs.unlink("/tmp/test.png");
  		fs.rename(files.upload.path, "/tmp/test.png");
  	  }
  	});
  	
  	response.writeHead(200, {"Content-Type": "text/html"});
  	response.write("received image:<br/>");
  	response.write("<img src='/show' />");
  	response.end();
  });
}

function show(response, postData) {
  console.log("--- Обработка запроса 'show'".blue.bold);
  fs.readFile("./tmp/test.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.show = show;
exports.upload = upload;