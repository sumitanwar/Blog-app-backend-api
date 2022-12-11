const app = require("./app");
// const dotenv = require("dotenv");
const mongoose = require("mongoose");

// dotenv.config();
//connect to DB

mongoose.connect(
  "mongodb://localhost/blogs",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (e) => {
    if (e) {
      return e;
    }
    console.log("connected to DB");
  }
);

app.listen(8080, () => console.log("Server running......"));
