const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const loginRoutes = require('./routes/login');
const usuariosRoutes = require('./routes/usuarios');
const medicionesRoutes = require('./routes/mediciones');
const reportesRoutes = require('./routes/reportes');
const alertasRoutes = require('./routes/alertas');

app.use('/api/login', loginRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/mediciones', medicionesRoutes);
app.use('/api/reportes', reportesRoutes);
app.use('/api/alertas', alertasRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor backend corriendo en puerto ${PORT}`));