const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Parses the body
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

//routes
app.get("/add-product", (req, res, next) => {
  console.log("in another middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3200);
