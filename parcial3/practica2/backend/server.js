const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/datos", (req, res) => {
  const rango = req.query.rango;

  let query = "SELECT fecha, valor FROM datos WHERE fecha >= CURDATE()";

  if (rango === 'semana') {
    query = "SELECT fecha, valor FROM datos WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)";
  } else if (rango === 'mes') {
    query = "SELECT fecha, valor FROM datos WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)";
  }

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3001, () => console.log('Servidor en puerto 3001'));

