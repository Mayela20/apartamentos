var express = require('express');
var router = express.Router();


//rutas de cada identidad
var apartamentosApiRoutes = require('./apartamentos/index');
//localhost:3000/api/con/
router.use('/con', apartamentosApiRoutes);

module.exports = router;