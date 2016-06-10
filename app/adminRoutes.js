var express = require('express');
var adminRouter = express.Router();

adminRouter.use(function(req, res, next){
 	console.log(req.method, req.url);
	next();
});

//************************************ DEFINICION DE LAS RUTAS DEL ADMIN ROUTE ************************************************************
adminRouter.get('/', function(req, res) { //admin panel (http://localhost:7777/admin/)
 res.send('¡Soy el panel de administración!');
});
 
adminRouter.get('/users', function (req, res) { //users page (http://localhost:7777/admin/users)
 res.send('¡Muestro todos los usuarios!');
});
 
adminRouter.get('/users/:name', function (req, res) { //username page (http://localhost:7777/admin/users/manolo)
 res.send('Hola '+req.params.name+'!');
});

adminRouter.get('/promos', function(req, res) { //posts page (http://localhost:7777/admin/promos)
 res.send('¡Muestro todas las promos!');
});
//********************************** FIN DE LA DEFINICION DE RUTAS PARA EL ADMIN ROUTE **************************************************** 