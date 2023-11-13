//  Código escrito por Cristian José
var express = require('express');
var router = express.Router();
const iniciar = require('../controllers/iniciar_sesion');

router.post('/' ,iniciar.iniciar_sesion);

module.exports = router;
