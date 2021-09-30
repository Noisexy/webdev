import e from "express";
import users from "../users.schema.js";
import bcrypt from "bcryptjs";

const getUser = (req, res) => {
  users.find((err, data) => {
    if (err) return res.status(500).send(err);
    else res.send(data);
  });
};

const postUser = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  users.find({ username }, (err, data) => {
    if (err) return res.status(500).send(err);
    else if (data.length < 1) {
      console.log("user created");
      users.create(req.body, (err, data) => {
        if (err) return res.status(500).send(err);
        else res.status(201).send(data);
      });
    } else {
      console.log("username already in db");
      res.status(404).send("username in db");
    }
  });
};

const logUser = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  users.findOne({ username }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else if (!data) {
      res.status(404).send("not found");
    } else {
      bcrypt.compare(password, data.password, (err, isMatch) => {
        if (err) {
          console.log(password + data.password);
          console.log(err);
          return res.status(500).send(err);
        }
        if (isMatch) {
          console.log("passwords match");
          res.status(200).send("passwords match");
        } else {
          console.log("password do not match");
          res.status(401).send("passwords do not match");
        }
      });
    }
  });
};

export default { getUser, postUser, logUser };
