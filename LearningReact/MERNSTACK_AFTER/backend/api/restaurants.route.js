import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("hello world!");
// });

// we make the api router
router.route("/").get((req, res) => {
  RestaurantsCtrl.apiGetRestaurants;
});

export default router;
