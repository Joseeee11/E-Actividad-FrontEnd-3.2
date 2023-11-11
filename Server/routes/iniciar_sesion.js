var express = require('express');
var router = express.Router();
const iniciar = new require('../controllers/iniciar_sesion');


/* GET home page. */
router.post('/' ,iniciar.iniciar_sesion, function(req, res, next) {
  
});

module.exports = router;
