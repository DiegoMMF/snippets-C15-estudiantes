const express = require('express');

// instanciamos un servidor
const app = express();

const mainRouter = require('./routes/mainRouter');

app.use("/primera", mainRouter);

// mi servidor se queda escuchando en 3001
app.listen(3001, () => console.log('http://localhost:3001'));