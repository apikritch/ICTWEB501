//Import Required Modules
const express = require("express");
const Mysql = require("mysql");
const router = express.Router();

const pool = Mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_usersapi",
  port: 3306
});

function getConnection() {
  return pool;
}

//Route For User
router.get("/users", (req, res, next) => {
  //MySQL Connection
  const connection = getConnection();

  //SQL Query And Response
  const queryString = "SELECT * FROM users";
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      res.send(`Something is wrong ${err}`);
      next(new Error(`Something is wrong ${err}`));
    }
    res.json(rows);
  });
});

//Route For Collecting POST Data
router.post("/user_create", (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const connection = getConnection();
  const queryString = "INSERT INTO users (first_Name, last_Name) VALUES (?,?)";

  connection.query(
    queryString,
    [firstName, lastName],
    (err, results, fields) => {
      if (err) {
        res.send(`Failed to insert new user: ${err}`);
        res.sendStatus(500);
        next(new Error(`Failed to inset new user: ${err}`));
      }
      //Response
      res.send(`Inserted a new user with id: ${results.insertId}`);
    }
  );
});

//Route For User ID
router.get("/users/:id", (req, res, next) => {
  const userID = req.params.id;

  //MySQL Connection
  const connection = getConnection();

  //Query
  const queryString = "SELECT * FROM users WHERE id=?";
  connection.query(queryString, [userID], (err, rows, fields) => {
    if (err) {
      res.send(`Something is wrong ${err}`);
      res.send(500);
      next(new Error(`Something is wrong ${err}`));
    }

    //res.json(rows);
    const users = rows.map(rows => {
      return { firstName: rows.first_name, lastName: rows.last_name };
    });
    res.json(users);
  });
});

module.exports = router;
