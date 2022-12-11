const router = require("express").Router();
const Blog = require("../models/Blog");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
// const querystring = require("querystring");
// const { create } = require("../models/Blog");
// Your routing code goes here
mongoose.connect("mongodb://localhost/blogs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
router.use(bodyparser.json());

router.get("/blog", async (req, res) => {
  let { page = 0 } = parseInt(req.query.page) - 1;
  let search = req.query.search;
  // console.log(search);
  let limit = 5;
  let perPage = limit * page;
  let user = await Blog.find();
  if ((page > 0 && search) || search) {
    user = await Blog.find({ topic: req.query.search });
  } else if (page > 0) {
    user = await Blog.find().skip(perPage).limit(limit);
  }
  //   console.log(user);
  //   console.log(req.body);
  try {
    res.status(200).json({
      status: "Success",
      result: user,
    });
  } catch (e) {
    res.status(404).json({ status: "Failed", message: e.message });
  }
});

router.post("/blog", async (req, res) => {
  //   console.log(req.body);
  const user = await Blog.create(req.body);
  try {
    res.status(200).json({
      Status: "Success",
      result: user,
    });
  } catch (e) {
    res.status(404).json({ status: "Failed", message: e.message });
  }
});
router.put("/blog/:id", async (req, res) => {
  const user = await Blog.updateOne({ _id: req.params.id }, { $set: req.body });
  try {
    res.status(200).json({
      Status: "Success",
      result: user,
    });
  } catch (e) {
    res.status(404).json({ status: "Failed", message: e.message });
  }
  router.delete("/blog/:id", async (req, res) => {
    const user = await Blog.deleteOne({ _id: req.params.id });
    try {
      res.status(200).json({
        Status: "Success",
        result: user,
      });
    } catch (e) {
      res.status(404).json({ Status: "Failed", message: e.message });
    }
  });
});
module.exports = router;
