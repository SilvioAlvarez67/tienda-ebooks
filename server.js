const express = require('express');
const path = require('path');

const app = express();

// Servir la carpeta 'public' (entrega index.html, styles.css, script.js)
app.use(express.static(path.join(__dirname, 'public')));

// Escuchar en el puerto dinámico de Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});