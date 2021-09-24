const express = require('express');
// NUESTRO SERVIDOR
const app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.get(
    // enrutador => url ruta que viene desde el navegador del usuario
    "/ruta1/:variable",
    // funcionalidad de NUESTRA APLICACIÓN
    (req, res) => {
    console.log(`variable`, req.params.variable);
    res.send(req.params.variable);
});

app.get("/ruta2/:opcional?", (req, res) => {
    console.log(`opcional`, req.params.opcional);
    res.send(req.params.opcional ? req.params.opcional : "(parámetro vacío)");
});

app.listen(3002, () => { console.log('Servidor arriba en http://localhost:3002');})
