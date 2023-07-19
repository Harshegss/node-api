const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const con = require("./Config/db");
const apiAuthMiddllewere = require("./Middlewere/apiAuthMiddllewere");
const ErrorHandler = require("./Controllers/ErrorHandler");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "models")));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(express.json());

app.use(apiAuthMiddllewere);

app
  .route("/items")
  .get((req, res) => {
    res.render(__dirname + "/views/home.html");
  })
  .post((req, res) => {
    console.log(req.body.name);
    res.send(`<h1>${req.body.name}</h1>`);
  })
  .put((req, res) => {
    res.send("Update the book");
  });

app.use(ErrorHandler);

app.listen(8080);

//? error handler
//? middlewere
//? comman error route middle