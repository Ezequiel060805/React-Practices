const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/datos", (req, res) => {
  db.query(
    "SELECT * FROM datos ORDER BY id DESC LIMIT 10",
    (err, rows) => {
      if (err) return res.status(500).send(err);
      res.json(rows);
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log(
    `Servidor corriendo en: http://localhost:${process.env.PORT}`
  );
});

