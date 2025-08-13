const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM alertas', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener alertas' });
    res.json(results);
  });
});

module.exports = router;