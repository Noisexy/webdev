import express from "express"; // need express to use router
const router = express.Router(); // we create a reference to the express.Router()

import userController from "./users.routercontroller.js"; // import the user router controller to gain access to all of its methods
const { getUser, postUser, delUser } = userController; // deconstruct the userController

router.route("/").get(getUser).post(postUser).delete(delUser);
// router.route allows us to use all of the methods that we imported from the userController
// and depending on the request method it calls one of the functions

export default router;
// exporting the router to use it in server
