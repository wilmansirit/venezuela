var express = require('express');
var router = express.Router();

var Estado = require('../models').Estado
const controllers = require('../controllers')


/* GET home page. */
router.get('/', (req, res) => {

  res.render('index', {title: 'Estados de Venezuela'})

})

/* GET Estado page. */
router.get('/estados', controllers.estadosController.index);

/* GET Municipios page. */
router.get('/municipios', controllers.municipiosController.index);



module.exports = router;
