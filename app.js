const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const pool = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const helmet = require('helmet');
const csurf = require('csurf');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');

dotenv.config();

app.use(express.json());
app.use(cookieParser()); // Asegúrate de que cookieParser se usa antes de csurf

// Seguridad
app.use(helmet());
app.use(xss());

// Configuración de csurf
const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

// Ruta temporal para probar la conexión a la base de datos
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    res.json({ solution: rows[0].solution });
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Ruta para obtener el token CSRF
app.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Rutas de usuario
app.use('/api/users', userRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
