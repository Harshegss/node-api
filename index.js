var http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
var mysql = require("mysql2");

app.use(morgan("dev"));

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

// app.get("/items", (req, res) => {
//   res.send('sdsd')
//   // con.query("SELECT * FROM test", (error, results) => {
//   //   if (error) throw error;
//   //   res.status(200).json(results);
//   // });
// });

app.route("/items")
  .get((req, res) => {
    res.render("home");
  })
  .post((req, res) => {
    console.log(req.body.name);
    res.send(`<h1>${req.body.name}</h1>`);
  })
  .put((req, res) => {
    res.send("Update the book");
  });

app.listen(8080);
