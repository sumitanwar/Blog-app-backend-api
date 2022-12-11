const express = require("express");
const app = express();

// Import routes
const blogRoute = require("./routes/blog");

//Router MIddlewares
app.use(express.json());
app.use("/", blogRoute);
app.get("*", (req, res) => {
  res.status(404).send("404! Page Not Found");
});
module.exports = app;
