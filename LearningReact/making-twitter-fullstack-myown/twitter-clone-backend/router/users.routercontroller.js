import mongoose from "mongoose";
import users from "../users.js"; // import our mongoose model
const uri =
  "mongodb+srv://admin:1aRYdgNcXuh6IXZ8@cluster0.n3jzx.mongodb.net/usersDB?retryWrites=true&w=majority";
// to connect to the database which handles our users info

mongoose.connect(uri); // connecting mongoose to the database

const getUser = (req, res) => {
  users.find((err, data) => {
    // takes error and data which are all of our users
    // finding all our users to show them
    if (err) {
      // if there is an error
      res.status(500).send(err);
    } else {
      //else just show the entire database of users
      return res.status(200).send(data);
    }
  });
};

const postUser = (req, res) => {
  // method that will be executed when we submit the login form
  const { username, email, password } = req.body;
  // deconstructing the req.body to get the variables that we require

  users.find({ username }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data.length < 1) {
      const user = { username, email, password };
      // we create an object that will take the vars that we deconstructed from the req.body
      // to pass it in the method below
      users.create(user, (err, data) => {
        // users.create is a method from the mongoose model that creates an object with the mongoose schema of users
        // takes in the user var that has all the data that we need: username email and password
        // the second param is a callback function that has error and the current data of the db
        if (err) {
          //if there is an error
          return res.status(500).send(err);
        } else {
          // else set the status to 201: created and send the data
          return res.status(201).send(data);
        }
      });
    } else {
      console.log("username already in the database");
      res.status(401).send("user is in db");
    }
  });

  //res.status(201).json({ success: true });
};

const delUser = (req, res) => {
  // delete method that will delete an object from the db depending on the username
  const { username } = req.body;
  // take the username from the req.body;
  users.findOneAndRemove(req.body, (err, data) => {
    if (err) {
      return res.status(500).send(err.data);
    } else {
      res.status(200).send("deleted");
      // we tell that everything went well and send deleted
    }
    //console.log(data);
  });
};

export default { getUser, postUser, delUser };

// exporting all of the methods to  later use it in the user router
