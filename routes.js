function route(handle, pathname, response, postData) {
  console.log("- Роутер работает: ".blue.bold + pathname);
  // func - if handle in hash
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](response, postData);
  } else {
    console.log("Не найден отбрабочтик для данного запроса: ".red + pathname);
    
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
