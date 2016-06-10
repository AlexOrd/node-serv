function route(handle, pathname) {
  console.log("Роутер работает: ".blue.bold + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log("Нет ответов. " + pathname);
  }
}

exports.route = route;
