import mongoose from "mongoose"; // mongoose to create our schema
import bcrypt from "bcryptjs"; // bcryptjs to hash the entered password

const userSchema = new mongoose.Schema({
  username: String, // username
  email: String, // email
  password: String, // password later to be hashed
  tweets: [{ type: String }],
});

userSchema.pre("save", function (next) {
  // cant be an arrow function else "this" will be undefined
  // this will be executed once we post the info from the login page
  //next is what middlewares need to know when to perform next task
  const user = this; // we get the schema props

  if (this.isModified("password") || this.isNew()) {
    // if the value of password is modified or the values are new
    bcrypt.genSalt(10, (saltError, salt) => {
      // the number 10 is the saltRounds which gives us control over the computing cost of the hashing
      // the higher the number the more time it will take to hash the password
      // in the callback we have the saltError where we will get any errors if something went wrong
      // and salt is the variable that along with the password will generate the hash
      if (saltError) {
        // if there is any error
        return next(saltError);
      } else {
        //if everyting is fine then we start the hash
        bcrypt.hash(user.password, salt, (hashError, hash) => {
          // we use the hash method on bcrypt and pass in the password and salt which together will generate the hash
          // and then pass a callback which will take the hashError and the hashed password
          if (hashError) {
            //if there is an error
            return next(hashError);
          }
          // if everything is ok we make the user.password = the hash and that will pass in the password hashed to the db
          user.password = hash;
          next();
          // then we just next
        });
      }
    });
  } else {
    //if the password hasn't been changed or inputted a new we just return next
    return next();
  }
});

export default mongoose.model("users", userSchema);
// we are exporting our mongoose model to later use where we handle the login router
