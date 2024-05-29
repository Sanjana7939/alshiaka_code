const express = require("express");
const sql = require("mssql/msnodesqlv8");
require("dotenv").config();

const app = express();

var config = {
  server: process.env.SERVER,
  database: process.env.DATABASE,
  driver: process.env.DRIVER,
  options: {
    trustedConnection: true,
  },
};

const db = sql.connect(config, function (err) {
  if (err) {
    console.error("Database connection failed:", err.message);
    // throw err;
    return;
  }
  console.log("Database Connected");
});

// app.get("/getUsersList", async (req, res) => {
//   try {
//     const pool = await sql.connect(config);
//     const result = await pool.request().query("SELECT * FROM TestTable");
//     res.json({ msg: "Fetch Users Successfully", data: result.recordsets });
//   } catch (err) {
//     console.error("SQL error:", err.message);
//     res.status(500).send("An error occurred while fetching data.");
//   }
// });

app.get("/", (req, res) => {
  res.send("<p>Welcome to the project</p>");
});

app.get("/about", (req, res) => {
  res.send("<p>About page</p>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

