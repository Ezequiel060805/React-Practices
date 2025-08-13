const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener usuarios' });
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { nombre, correo, contraseña, rol } = req.body;
  db.query('INSERT INTO usuarios (nombre, correo, contraseña, rol) VALUES (?, ?, ?, ?)', [nombre, correo, contraseña, rol], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al agregar usuario' });
    res.json({ message: 'Usuario agregado correctamente' });
  });
});

module.exports = router;