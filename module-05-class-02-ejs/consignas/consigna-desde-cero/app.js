const express = require('express');
const app = express();

const router = require('./routes/mainRouter');

app.use(express.static('public'));

app.set("view engine", "ejs");

// Rutas
app.use("/", router);

app.listen(3001, () => { console.log('Servidor arriba en http://localhost:3001');})