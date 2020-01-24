const bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("./db/db");
const { Client } = require("pg");
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

function checkToken(req, res, next) {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    console.log("token", token);
    req.body.token = token;
    jwt.verify(token, "secret", (err, data) => {
      if (err) {
        res.sendStatus(401);
      } else {
        next();
      }
    });
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
}

app.post("/signup", (req, res) => {
  client.query(
    "INSERT INTO details(name,email,role,password) values($1,$2,$3,$4)",
    [req.body.name, req.body.email, req.body.role, req.body.password],
    (err, res) => {
      if (err) console.log(err, res);
      else console.log("data entered succesfully");
    }
  );

  res.send(req.body.name);
});
app.get("/", checkToken, function(req, res) {
  client.query(
    "select name from details where token=$1",
    [req.body.token],
    (err, results) => {
      if (err) {
        throw err;
      } else {
        res.send({ success: true, result: results.rows[0] });
      }
    }
  );
});

app.post("/login", function(req, res) {
  client.query(
    "select * from details where email = $1 and password = $2",
    [req.body.email, req.body.password],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        console.log(results.rows[0].userid);
        if (results.rowCount == 0) {
          res.json({ success: false });
        } else {
          let token = jwt.sign(
            { exp: Math.floor(Date.now() / 1000) + 60 * 60 },
            "secret"
          );
          res.json({ success: true, token });
          client.query(
            "UPDATE details set token = $1 where userid = $2 ",
            [token, results.rows[0].userid],
            (err, res) => {
              if (err) console.log(err, res);
              else console.log("token entered succesfully");
            }
          );
        }
      }
    }
  );
});

const PORT = 5223;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
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
