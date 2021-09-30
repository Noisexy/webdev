import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// using the bcryptjs to use the method that will allow us to verify if the password entered on login is the same as the one stored in the database
import users from "../users.js";

const uri =
  "mongodb+srv://admin:1aRYdgNcXuh6IXZ8@cluster0.n3jzx.mongodb.net/usersDB?retryWrites=true&w=majority";
// to connect to the database which handles our users info

mongoose.connect(uri); // connecting mongoose to the database

const postEnterUser = (req, res) => {
  const user = req.body;
  // getting the info the user inputed from the form of log in
  const { username, password } = user;
  //deconstructing the users variables

  users.find({ username }, (err, data) => {
    // we use the mongoose method to find with the "{username} needs to be an object"
    // the callback takes in err and data, data will have all of the info linked to that username such as email and password
    if (data.length > 0) {
      // if the data length is greater than 0 means there is a user that matches in the database
      const newData = data.shift();
      // we create a new variable where we will store an object that we are going go get from the data and the shift method
      // shift method allows us to get that object instead of having an array
      bcrypt.compare(password, newData.password, (err, isMatch) => {
        //bcrypt method that takes in two parameters and a callback
        // first parameter is the password inputted from the log in form
        // newData.password is the password retrieved from the database that will have a hashed format
        // then a callback which has error and isMatch: boolean either false or true depending if the passwords match
        if (err) {
          res.status(500).send("error");
          // if there is an error
        }
        if (isMatch) {
          // if the paswords match
          console.log("passwords match");
          res.status(200).send("hola");
          //we send a status of 200 to let the front end know that username and password are correct
        } else {
          //if passwords do not match
          res.status(403).send("hola");
          // status of they do not match
          console.log("passwords do not match");
        }
      });
      //res.status(200).send("hola");
    } else {
      res.status(403).send("hola");
      // else if there is no username that matches that username
    }
  });
  //res.status(200);
};

export default { postEnterUser };
