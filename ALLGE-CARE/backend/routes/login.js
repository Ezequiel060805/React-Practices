const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM login WHERE usuario = ? AND contraseña = ?', [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en servidor' });
    if (results.length > 0) {
      res.json({ login: true, user: results[0] });
    } else {
      res.status(401).json({ login: false, message: 'Credenciales inválidas' });
    }
  });
});

module.exports = router;