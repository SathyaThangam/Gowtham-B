const bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("./db/db");
const { Client } = require("pg");
const route = require("./route/approute");
const client = new Client({
  user: "postgres",
  password: "rahul1095",
  host: "localhost",
  port: 5432,
  database: "postgres"
});
client.connect().then(() => console.log("connected database"));

const app = express();
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
route(app);

const PORT = 5233;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
// var http=require('http');

// var server=http.createSeconnected databaserver(function(req,res){
//   res.end('test');
// });

// server.on('listening',function(){
//   console.log('ok, server is running');
// });

// server.listen(80);
// app.post("/api/v1/user", (req, res) => {
//   if (!req.body.firstname) {
//     return res.status(400).send({
//       success: "false",
//       message: "first name is required"
//     });
//   } else if (!req.body.lastname) {
//     return res.status(400).send({
//       success: "false",
//       message: "last name is required"
//     });
//   } else if (!req.body.email) {
//     return res.status(400).send({
//       success: "false",
//       message: "email is required"
//     });
//   }
//   const user = {
//     id: db.length + 1,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     password: req.body.password
//   };
//   db.push(user);
//   return res.status(201).send({
//     success: "true",
//     message: "user added successfully",
//     user
//   });
// });
// app.get("/api/v1/user", (req, res) => {
//   res.status(200).send({
//     success: "true",
//     message: "user retrived",
//     user: db
//   });
// });
