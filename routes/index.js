var express = require('express');
var router = express.Router();

var Estado = require('../models').Estado
const controllers = require('../controllers')


/* GET home page. */
router.get('/', (req, res) => {

  res.render('index', {title: 'Distribución Política Territorial de Venezuela'})

})

/* GET Estado de Venezuela page. */
router.get('/estados', controllers.estadosController.index);

/* GET Municipios de Venezuela page. */
router.get('/municipios', controllers.municipiosController.index);

/* GET Parroquias de Venezuela page. */
router.get('/parroquias', controllers.parroquiasController.index)

/* GET Parroquias de Venezuela page. */
router.get('/ciudades', controllers.ciudadesController.index)



module.exports = router;
