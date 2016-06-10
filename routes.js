function route(handle, pathname, response) {
  console.log("Роутер работает: ".blue.bold + pathname);
  // func - if handle in hash
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("Не найден отбрабочтик запросов. ".red + pathname);
    
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
