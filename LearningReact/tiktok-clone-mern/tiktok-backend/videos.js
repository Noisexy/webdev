import mongoose from "mongoose";

const newSchema = mongoose.Schema({
  url: String,
  title: String,
  description: String,
});

export default mongoose.model("videos", newSchema);
