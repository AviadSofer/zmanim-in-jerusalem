const path = require("path");
const express = require("express");
const app = express();

// port
const port = process.env.PORT || 5000;

// add middleware
app.use(express.static(path.join(__dirname, "client", "dist")));
app.use(express.static("public"));

// start express server on port 5000
app.listen(port, () => {
  console.log("server started on port 5000");
});
