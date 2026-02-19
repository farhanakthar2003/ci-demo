const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Received Event:");
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log("Webhook server running on port 5000");
});
