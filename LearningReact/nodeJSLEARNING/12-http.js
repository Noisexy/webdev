const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("welcome to our about page");
  }
  res.end(
    `<h1>hola</h1> <p>we cant seem to find the page you are looking for</p> <a href="/">BACKHOME</a>`
  );
});

server.listen(3000);
