const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const blogSchema = new mongoose.Schema({
  // Your code goes here
  topic: { type: String, required: true },
  description: { type: String, required: true },
  posted_at: { type: String, required: true },
  posted_by: { type: String, required: true },
});

const Blog = mongoose.model("blogs", blogSchema);

module.exports = Blog;
