const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("always here");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("in users");
  res.send("<h1>In users</h1>");
});

app.use("/", (req, res, next) => {
  console.log("in home");
  res.send("<h1>In slash</h1>");
});
app.listen(3200);
