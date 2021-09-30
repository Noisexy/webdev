import controller from "./sign-log-in.controller.js";
import express from "express";
const router = express.Router();
const { getUser, postUser, logUser } = controller;

router.route("/").post(postUser).get(getUser);
router.route("/login").post(logUser);

export default router;
