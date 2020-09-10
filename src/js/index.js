const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "..", "..", "dist")));

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});

app.get("/", function (req, res) {
  res.sendFile("index.html");
});
