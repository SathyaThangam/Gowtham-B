const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "rahul1095",
  host: "localhost",
  port: 5432,
  database: "postgres"
});
client.connect().then(() => console.log("connected database"));
module.exports = client;
