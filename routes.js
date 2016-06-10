function route(handle, pathname) {
  console.log("Роутер работает: ".blue.bold + pathname);
  // func - if handle in hash
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("Не найден отбрабочтик запросов. ".red + pathname);
    return "404 Not found"
  }
}

exports.route = route;
