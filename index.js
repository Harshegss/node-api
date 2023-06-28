var http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
var mysql = require("mysql2");

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
  }
  console.log('Connected to the database.');
});

// app.get("/items", (req, res) => {
//   res.send('sdsd')
//   // con.query("SELECT * FROM test", (error, results) => {
//   //   if (error) throw error;
//   //   res.status(200).json(results);
//   // });
// });
app.route('/items')
.get((req, res) => {
      con.query("SELECT * FROM test", (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
  
app.listen(8080);

