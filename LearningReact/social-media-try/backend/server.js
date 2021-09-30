import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import signLogRouter from "./routing/sign-log-in.router.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", signLogRouter);

const uri =
  "mongodb+srv://admin:GbaEHEBG0RWlffYA@cluster0.dqqrr.mongodb.net/socialMediaTry?retryWrites=true&w=majority";

mongoose.connect(uri);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send("hello world!");
});

app.listen(port, () => {
  console.log("running on port 8000");
});

//GbaEHEBG0RWlffYA
