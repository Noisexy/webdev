import express from "express";
import cors from "cors";
import http from "http";
const app = express();
app.use(cors());
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server({
  path: "/test",
});

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

server.listen(4000, () => {
  console.log("listening on port 4000");
});
