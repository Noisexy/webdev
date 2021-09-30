const express = require("express");
const app = express();
const people = require("./routes/people");
const login = require("./routes/auth");

// static routes
app.use(express.static("./methods-public"));
//parse from data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
//
app.use("/api/people", people);
//
app.use("/login", login);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
