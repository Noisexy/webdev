import mongoose from "mongoose";
import users from "../users.js";

const uri =
  "mongodb+srv://admin:1aRYdgNcXuh6IXZ8@cluster0.n3jzx.mongodb.net/usersDB?retryWrites=true&w=majority";
// to connect to the database which handles our users info

mongoose.connect(uri);

const getTweets = (req, res) => {
  users.find((err, data) => {
    console.log(data);
    if (err) {
      console.log(err);
    } else {
      let tweetsData = [];
      data.forEach(
        (user) =>
          (tweetsData = [
            ...tweetsData,
            { user: user.username, tweets: user.tweets, id: user._id },
          ])
      );
      console.log(tweetsData);
      res.status(200).send(tweetsData);
    }
  });
};

const putTweets = (req, res) => {
  const { username, tweets } = req.body;
  console.log(username + " " + tweets);
  users.findOne({ username }, (err, data) => {
    if (err) {
      console.log(err);
    }
    users.findOneAndUpdate(
      { username: username },
      { $set: { tweets: [tweets, ...data.tweets] } },
      { new: true },
      (err, doc) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).send("ok");
      }
    );
  });
};

const getUserTweets = (req, res) => {
  console.log(req.query);
  users.findOne(req.query, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      console.log("sending data");
      // console.log(data.tweets);
      return res.status(200).send(data.tweets);
    }
  });
};

const getUserProfile = (req, res) => {
  console.log(req.query);
  console.log("asdfasdfasf");
  users.findOne(req.query, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(data);
  });
  res.status(200).send("ok");
};

export default { putTweets, getTweets, getUserTweets, getUserProfile };
