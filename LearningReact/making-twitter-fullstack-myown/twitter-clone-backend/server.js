import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import usersRoute from "./router/users.router.js"; // to gain access to the users router
import usersEnterRouter from "./router/usersEnter.router.js";
import Tweetsrouter from "./router/tweets.router.js";

const app = express(); // to use express

app.use(express.json());
app.use(cors());
app.use("/api/v1/users", usersRoute); //middleware to use the users router
// specify the path of the users api and then pass in the router to handle all of the requests

app.use("/api/v1/users/enter", usersEnterRouter); // the middleware that will allow us to log into an accout

app.use("/api/v1/tweets", Tweetsrouter);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hola mundo!");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});

//1aRYdgNcXuh6IXZ8
