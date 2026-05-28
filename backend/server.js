const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});