var http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
var mysql = require("mysql");

app.use(morgan("dev"));

var con = mysql.createConnection({
  host: "92.204.133.153",
  user: "siteinte_hello_node",
  password: "B5HmQL~cQTPB",
  database: "siteinte_hello_node",
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  // console.log('Connected to the database.');
});

let date = new Date();

app.get("/items", (req, res) => {
  const x = date.getTime();

  con.query("SELECT * FROM test", (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
  const y = date.getTime();
});

app.listen(8080);