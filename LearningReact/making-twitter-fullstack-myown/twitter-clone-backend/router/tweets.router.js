import express from "express";
export const router = express.Router();
import tweetsController from "./tweets.router.controller.js";
const { putTweets, getTweets, getUserTweets, getUserProfile } =
  tweetsController;

router.route("/").put(putTweets).get(getTweets);

router.route("/userTweets").get(getUserTweets);

router.route("/user").get(getUserProfile);

export default router;
