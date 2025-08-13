const express = require('express');
const cors = require('cors');  // 4.5k (gzipped: 1.9k)
const mysql = require('mysql2');  // 791.3k (gzipped: 347.4k)
const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'db'
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

app.get('/api/data', (req, res) => {
    const query = 'SELECT nombre , cantidad_Alumnos FROM Carrerass';
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
