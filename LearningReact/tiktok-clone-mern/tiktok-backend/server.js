import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import videos from "./videos.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = 8000;
const uri =
  "mongodb+srv://admin:vQXkRD7KPT9niefP@cluster0.gsdsa.mongodb.net/tiktokdata?retryWrites=true&w=majority";

mongoose.connect(uri);

app.post("/api/v1/videos", (req, res) => {
  const body = req.body;
  videos.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/api/v1/videos", (req, res) => {
  videos.find((err, data) => {
    console.log(data);
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
