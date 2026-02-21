const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI Demo App Running. Lets Check the Deploy Guard is working perfectly.One Two");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
