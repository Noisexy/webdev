const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/test.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile("./content/result-async.txt", "hola mundo!", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
  });
});
