const express = require('express');
const cors = require('cors');  // 4.5k (gzipped: 1.9k)
const mysql = require('mysql');  // 791.3k (gzipped: 347.4k)
const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: '82.197.82.75',
    user: 'u122778614_espi',
    password: 'U_u123456',
    database: 'u122778614_integradora'
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM alertas';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ error: 'Error en la base de datos' });
        } else {
            res.json(results);
        }
    });
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
