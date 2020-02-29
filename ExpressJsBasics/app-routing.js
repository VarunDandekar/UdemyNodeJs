const express = require("express");

const app = express();
app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

//routes
app.use("/add-product", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>The add product</h1>");
});

app.use("/", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3200);
