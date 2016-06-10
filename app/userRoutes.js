var express = require('express');
var userRouter = express.Router();

userRouter.use(function(req, res, next){
	console.log(req.method, req.url);
 	next();
});

userRouter.param('name', function(req, res, next, name){
 //haz aquí la validación de name
 //blah blah blah, validación
 //mostramos en consola para saber si funciona
 console.log('haciendo validaciones de ' + name);
 
 //una vez hecha la validación guardamos el nuevo objeto en la petición
 req.name = name;
 //pasamos al siguiente asunto
 next();
});

//********************************** DEFINICION DE LAS RUTAS PARA LA PARTE DE USUARIOS ****************************************************
userRouter.get('/', function(req, res) { // user panel (http://localhost:7777/user)
 res.send('¡Soy el panel del usuario!');
});
 
userRouter.get('/profile', function (req, res) { //user profile (http://localhost:7777/user/profile)
 res.send('¡Muestro el perfil del usuario!');
});

userRouter.get('/profile/:name', function (req, res) { //user profile (http://localhost:7777/user/profile/name)
 res.send('Este el perfil del usuario '+req.name+' ...');
});
 
userRouter.get('/promos', function(req, res) { //user promos (http://localhost:7777/user/promos)
 res.send('¡Muestro todas las promos del usuario!');
});
//********************************** FIN DE LA DEFINICION DE RUTAS PARA LA PARTE DE USUARIOS **********************************************