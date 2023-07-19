var http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
var mysql = require("mysql2");
const path  = require("path")

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "models")));
app.engine("html", require("ejs").renderFile);

app.set("view engine", "ejs");

app.use(express.json());

var con = mysql.createConnection({
  host: "68.66.226.83",
  user: "tstarghserver_egss_career",
  password: "tstarghserver_egss_career",
  database: "tstarghserver_egss_career",
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
  }
  console.log("Connected to the database.");
});

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

app.listen(8080);
