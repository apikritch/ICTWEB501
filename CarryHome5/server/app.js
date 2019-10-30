const express = require("express");
const app = express();
//Import MySQL
const Mysql = require("mysql");
//Import Body-Parser
const bodyParser = require("body-parser");
//Import Router Module
const router = require("./routes/users.js");

//To Support JSON-Encoded Bodies
app.use(bodyParser.json());
//To Support URL-Encoded Bodies
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
//Access form.html
app.use(express.static("./public"));

//Use Router
app.use(router);

app.get("/", (req, res, next) => {
  res.send("Root Directory");
});

app.listen(3000, () => {
  console.log("The server is listening on port 3000...");
});
