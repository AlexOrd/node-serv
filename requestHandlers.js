function start() {
  console.log("Запрос 'start'.");
  return "Start";
}

function upload() {
  console.log("Запрос 'upload'.");
  return "Upload";
}

exports.start = start;
exports.upload = upload;