const express = require('express');

const router = express.Router();

const controlador = require("../controllers/mainController")

router.get('/primera', controlador.index);

module.exports = router;