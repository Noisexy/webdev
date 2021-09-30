import express from "express";
const router = express.Router();
import userEnterController from "./usersEnter.routercontroller.js"; // importing the controller of the user log inside of their accounts
const { postEnterUser } = userEnterController; // deconstructing the methods inside of the controller

router.route("/").post(postEnterUser);
//setting all of its routes

export default router;
