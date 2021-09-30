const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`data recieved`);
});
customEmitter.on("response", () => {
  console.log(`data recieved number 2`);
});

customEmitter.emit("response");

// creating a server with events

const http = require("http");

//using event emitter
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
