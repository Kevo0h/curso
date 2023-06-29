var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'PAGINA DE inicio',
    cuerpo: 'Parte cuerpo',
    seccion: 'Parte de la seccion'
 }); 
 
});

module.exports = router;
