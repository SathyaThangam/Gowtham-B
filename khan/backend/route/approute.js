const route = app => {
  const client = require("../db/db");
  const jwt = require("jsonwebtoken");
  function checkToken(req, res, next) {
    console.log(req.headers);
    const header = req.headers["authorization"];
    console.log(header.split(" "));
    if (typeof header !== "undefined") {
      const bearer = header.split(" ");
      const token = bearer[1];
      console.log("token", token);
      jwt.verify(token, "secret", (err, data) => {
        if (err) {
          console.log(err);
          res.sendStatus(401);
        } else {
          req.body.token = token;
          console.log("verified");
          next();
        }
      });
    } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403);
    }
  }
  app.get("/getstudent", checkToken, (req, res) => {
    var role = req.query.role;
    console.log(role, req.query.role);
    if (role === "1") {
      client.query(
        `select teacherid from teacherdetails where token='${req.body.token}'`,
        (err, result) => {
          if (err) console.log(err);
          else {
            var teacherid = result.rows[0].teacherid;
            console.log(teacherid);
            client.query(
              `select userid,name from studentdetails where teacherid='${teacherid}'`,
              (err, result) => {
                if (err) console.log(err);
                else {
                  res.send({ success: true, result: result.rows });
                }
              }
            );
          }
        }
      );
    } else if (role === "2") {
      console.log("hello");
      client.query(
        `select userid from studentdetails where token='${req.body.token}'`,
        (err, result) => {
          if (err) console.log(err);
          else {
            var student = result.rows[0].userid;
            console.log(student);
            client.query(
              `select subject from marks where userid='${student}'`,
              (err, result) => {
                if (err) console.log(err);
                else {
                  var subject = result.rows[0].subject;
                  client.query(
                    `select * from courses where courseid='${subject}'`,
                    (err, results) => {
                      if (err) console.log(err);
                      else {
                        console.log(results.rows);
                        res.send({ success: true, result: results.rows });
                      }
                    }
                  );
                  // res.send({ success: true, result: result.rows });
                }
              }
            );
          }
        }
      );
    }
  });
  // app.post("/signup", (req, res) => {
  //   let { name, password, email, work } = req.body;
  //   let token = jwt.sign(
  //     { exp: Math.floor(Date.now() / 1000) + 60 * 60 },
  //     "key"
  //   );
  //   let query = `INSERT INTO Users (name, email, password, token) values (${name}, ${email}, ${password}, ${token}) RETURNING *`;
  //   client.query(query, [], (err, result) => {
  //     if (err) console.log(err);
  //     else if (results.rowCount == 0) res.send({ success: false });
  //     else {

  //     }
  //   });
  // });

  app.post("/select", checkToken, (req, res) => {
    var courseid = req.body.course;
    client.query(
      `select userid,teacherid from studentdetails where token='${req.body.token}'`,
      (err, results) => {
        if (err) {
          res.send(err);
        } else {
          console.log(results);
          var stdid = results.rows[0].userid;
          var teacherid = results.rows[0].teacherid;
          client.query(
            `insert into subject(studentid,courseid,teacherid) values($1,$2,$3) RETURNING * `,
            [stdid, courseid, teacherid],
            (err, results) => {
              if (err) res.send(err);
              else {
                res.send({ success: true, result: results.rows });
                client.query(
                  `select name from studentdetails where userid=${stdid}`,
                  (err, results) => {
                    if (err) console.log(err);
                    else {
                      var name = results.rows[0].name;
                      client.query(
                        "insert into marks(userid,name,teacherid,subject) values($1,$2,$3,$4) RETURNING *",
                        [stdid, name, teacherid, courseid],
                        (err, results) => {
                          if (err) res.send(err);
                          else {
                            res.send({ success: true, result: results.rows });
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  });
  app.post("/changemark", (req, res) => {
    client.query(
      "UPDATE marks set marks = $1 where userid = $2 ",
      [req.body.mark, req.body.id],
      (err, result) => {
        if (err) console.log(err);
        else {
          console.log("marks updated successfully");
          res.send({ updated: true });
        }
      }
    );
  });
  app.post("/signup", (req, res) => {
    // console.log(req);
    if (req.body.role === "2") {
      client.query(
        "INSERT INTO studentdetails (name,email,password,teacherid) values($1,$2,$3,$4) RETURNING *",
        [req.body.name, req.body.email, req.body.password, req.body.work],
        (err, result) => {
          if (err) console.log(err, res);
          // console.log(hello);
          else {
            console.log(" student data entered succesfully", res);
            if (result.rowCount == 0) {
              res.json({ success: false });
            } else {
              let token = jwt.sign(
                { exp: Math.floor(Date.now() / 1000) + 60 * 60 },
                "secret"
              );
              res.json({ success: true, token, role: req.body.role });

              client.query(
                "UPDATE studentdetails set token = $1 where userid = $2 ",
                [token, result.rows[0].userid],
                (err, res) => {
                  if (err) console.log(err, res);
                  else console.log("token entered succesfully");
                }
              );
            }
          }
        }
      );
    } else if (req.body.role === "1") {
      var dept;
      // res.send("check")
      client.query(
        "select courseheader from courses where courseid =$1",
        [req.body.course],
        (err, result) => {
          if (err) res.send(err);
          else {
            dept = result.rows[0].courseheader;
            client.query(
              "INSERT INTO teacherdetails (name,email,password,department) values($1,$2,$3,$4) RETURNING *",
              [req.body.name, req.body.email, req.body.password, dept],
              (err, results) => {
                if (err) res.send(err);
                else {
                  console.log("teacher data entered succesfully");

                  if (results.rowCount == 0) {
                    res.send({ success: false });
                  } else {
                    let token = jwt.sign(
                      { exp: Math.floor(Date.now() / 1000) + 60 * 60 },
                      "secret"
                    );
                    client.query(
                      "UPDATE teacherdetails set token = $1 where teacherid = $2 ",
                      [token, results.rows[0].teacherid],
                      (err, res) => {
                        if (err) console.log(err, res);
                        else console.log("token entered succesfully");
                      }
                    );
                    res.send({ success: true, token, role: req.body.role });
                  }
                }
              }
            );
          }
        }
      );
    }
  });

  app.get("/marks", checkToken, function(req, res) {
    let role = req.query.isrole;
    if (role === "1") {
      client.query(
        `select name,teacherid from teacherdetails where token = '${req.body.token}'`,
        (err, result) => {
          if (err) console.log(err);
          else {
            let id = result.rows[0].teacherid;
            client.query(
              `select * from marks where teacherid= '${id}'`,
              (err, result) => {
                if (err) console.log(err);
                else {
                  res.send({ success: true, result: result.rows });
                }
              }
            );
          }
        }
      );
    } else if (role === "2") {
      client.query(
        `select userid from studentdetails where token= '${req.body.token}'`,
        (err, result) => {
          if (err) console.log(err);
          else {
            let id = result.rows[0].userid;

            client.query(
              `select * from marks where userid='${id}'`,
              (err, result) => {
                if (err) console.log(err);
                else {
                  var subject = result.rows;
                  res.send({ success: true, result: result.rows });
                }
              }
            );
          }
        }
      );
    }
  });
  app.get("/", checkToken, function(req, res) {
    let data = req.query.role;

    if (data === "2") {
      client.query(
        `select * from studentdetails where token = '${req.body.token}'`,
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            res.send({
              success: true,
              result: results.rows[0]
            });
          }
        }
      );
    } else if (data === "1") {
      client.query(
        `select * from teacherdetails where token = '${req.body.token}'`,
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            res.send({
              success: true,
              result: results.rows[0]
            });
          }
        }
      );
    }
  });
  app.get("/getcourse", function(req, res) {
    client.query(
      `select coursename from courses where coursename like '%${data}%' or courseheader like '%${data}%'`,
      (err, results) => {
        if (err) {
          throw err;
        } else {
          res.send({ success: true, result: results });
        }
      }
    );
  });
  app.get("/coursed", function(req, res) {
    client.query("select * from courses", (err, result) => {
      if (err) {
        throw err;
      } else {
        // console.log(result);
        res.send({ success: true, result: result.rows });
      }
    });
  });
  app.get("/getdetails", function(req, res) {
    let role = req.query.isTeacher === "true" ? "1" : "2";
    if (role === "1") {
      client.query(
        `select name,teacherid from teacherdetails`,
        (error, results) => {
          console.log(results);
          res.send({ success: true, result: results.rows });
        }
      );
    } else if (role === "2") {
      client.query(`select * from courses`, (err, results) => {
        console.log(results);
        res.send({ success: true, result: results.rows });
      });
    }
  });
  app.post("/login", function(req, res) {
    console.log(req.body);
    if (req.body.role === 2) {
      client.query(
        "select * from studentdetails where email = $1 and password = $2",
        [req.body.email, req.body.password],
        (error, results) => {
          if (error) {
            throw error;
          } else {
            if (results.rowCount == 0) {
              res.json({ success: false });
            } else {
              let token = jwt.sign(
                { exp: Math.floor(Date.now() / 1000) + 60 * 60 },
                "secret"
              );
              client.query(
                "UPDATE studentdetails set token = $1 where userid = $2 ",
                [token, results.rows[0].userid],
                (err, result) => {
                  if (err) console.log(err, result);
                  else console.log("token entered succesfully");
                  res.send({ success: true, token, role: req.body.role });
                }
              );
            }
          }
        }
      );
    } else if (req.body.role === 1) {
      client.query(
        "select * from teacherdetails where email = $1 and password = $2",
        [req.body.email, req.body.password],
        (error, results) => {
          if (error) {
            throw error;
          } else {
            if (results.rowCount == 0) {
              res.send({ success: false });
            } else {
              let token = jwt.sign(
                { exp: Math.floor(Date.now() / 1000) + 60 * 60 },
                "secret"
              );
              client.query(
                "UPDATE teacherdetails set token = $1 where teacherid = $2 ",
                [token, results.rows[0].teacherid],
                (err, result) => {
                  if (err) console.log(err, result);
                  else console.log("token entered succesfully");
                  res.send({ success: true, token, role: req.body.role });
                }
              );
            }
          }
        }
      );
    }
  });
};
module.exports = route;
