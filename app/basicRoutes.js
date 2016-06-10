var express = require('express');
var basicRoutes = express.Router();

basicRoutes.use(function(req, res, next){
 	console.log(req.method, req.url);
 	next();
});

//********************************** DEFINICION DE LAS RUTAS BASICAS **********************************************************************
basicRoutes.get('/', function(req, res) { //pagina de inicio (http://localhost:7777/)
 res.send('¡Soy la pagina de inicio!');
});

basicRoutes.get('/login', function(req, res) { //pagina de saludo (http://localhost:7777/juan)
  res.send('este es el formulario de login');
});

//procesamos el formulario (POST http://localhost:7777/login)
basicRoutes.post(function(req, res){
   res.send('procesando el formulario de login');
  });
//********************************** FIN DE LAS RUTAS BASICAS ******************************************************************************