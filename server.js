var express = require('express');
var app = express();
var path = require('path');


//************************************* CREAMOS LAS RUTAS QUE VAMOS A UTILIZAR EN LA APP *********************************************
var adminRouter = express.Router();
var userRouter = express.Router();
var basicRoutes = express.Router();
//************************************ FIN DE LAS RUTAS DE LA APP *********************************************************************


//************************************ MIDDLEWARE PARA INTERCEPTAR LAS RUTAS QUE QUERAMOS EN ESTE PUNTO ********************************
adminRouter.use(function(req, res, next){
 	console.log(req.method, req.url);
	next();
});

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


basicRoutes.use(function(req, res, next){
 	console.log(req.method, req.url);
 	next();
});
//************************************ FIN DEL MIDDLEWARE PARA INTERCEPTAR LAS RUTAS QUE QUEREMOS *****************************************

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

//********************************** DEFINICION DE LOS PATHS DE INICIO PARA LAS RUTAS DEFINIDAS ********************************************
app.use('/',basicRoutes);
//aplicamos las rutas a nuestra aplicación, app
app.use('/admin', adminRouter);
//aplicamos las rutas a nuestra aplicación, app
app.use('/user', userRouter);
//********************************** FIN DE LA DEFINICION DE LOS PATHS DE INICIO DE LAS RUTAS *********************************************

//************************************* INICIAMOS EL SERVIDOR ******************************************************************************
app.listen(7777);
console.log('¡7777 es un puerto maravilloso!');
//************************************* FIN ************************************************************************************************