import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js"; // importing the restaurant router

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/restaurants", restaurants); // to use the restaurants router
app.use("*", (req, res) => {
  // if the user goes to an undefined page we throw in an error page
  return res.status(404).json({ error: "not found" });
});

export default app; // we export the app
