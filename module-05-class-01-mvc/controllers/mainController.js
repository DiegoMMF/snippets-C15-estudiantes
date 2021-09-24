const path = require("path");

const datos = {
    dato1: "valor1",
    dato2: "valor2"
}

const controlador = {
    index: (req, res) => {
        const index = "../views/index.html";
        res.sendFile(path.join(__dirname, index));
    },
    otroAtributo: (req, res) => {
        const index = "../views/index.html";
        res.sendFile(path.join(__dirname, index));
    },
}

module.exports = controlador;