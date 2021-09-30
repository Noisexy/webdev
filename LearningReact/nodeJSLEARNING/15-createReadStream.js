//to create a big file

// const { writeFile } = require("fs").promises;

// const start = async () => {
//   try {
//     await writeFile("./content/BigFile.txt", `Hello world!`, { flag: "a" });
//   } catch (e) {
//     console.log(e);
//   }
// };
// for (let i = 0; i < 1000; i++) {
//   start();
// }

const { createReadStream } = require("fs");

const stream = createReadStream("./content/BigFile.txt");

stream.on("data", (result) => {
  console.log(result);
});

////////////////////////////////////////////////
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      const fileStream = fs.createReadStream("./content/BigFile.txt", "utf8");
      fileStream.on("read", () => {
        fileStream.pipe(res);
      });
      fileStream.on("error", (err) => {
        res.end(err);
      });
    }
  })
  .listen(5000, () => {
    console.log("listening on port 5000");
  });
