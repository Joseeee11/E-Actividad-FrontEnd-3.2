var express = require('express');
var router = express.Router();
var registroControllers = require("../controllers/registro.c.js");

router.post('/',registroControllers.agregar)

module.exports = router;