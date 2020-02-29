const express = require("express");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log("in middleware");
  next(); //allows next middleware to process
});

app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3200);
