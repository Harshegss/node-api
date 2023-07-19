var mysql = require("mysql2");
const con = mysql.createConnection({
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
  module.exports = con;