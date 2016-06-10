var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var port  	 = process.env.PORT || 7777;


//************************************* CREAMOS LAS RUTAS QUE VAMOS A UTILIZAR EN LA APP *********************************************
var adminRouter = express.Router();
var userRouter = express.Router();
var basicRouter = express.Router();
var promoRouter = express.Router();
var promos  = require('./app/controllers/promoController');
var users  = require('./app/controllers/userController');
var admin  = require('./app/controllers/adminController');
var basic  = require('./app/controllers/basicController');
//************************************ FIN DE LAS RUTAS DE LA APP *********************************************************************

//*********************************** ESTABLECEMOS LA CONEXION A LA BB.DD. ************************************************************
mongoose.connect('mongodb://localhost/promos');

//*********************************** FIN ESTABLECEMOS LA CONEXION A LA BB.DD. ************************************************************

//************************************ MIDDLEWARE PARA INTERCEPTAR LAS RUTAS QUE QUERAMOS EN ESTE PUNTO ********************************
adminRouter.use(function(req, res, next){
 	console.log(req.method, req.url);
	next();
});

promoRouter.use(function(req, res, next){
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


basicRouter.use(function(req, res, next){
 	console.log(req.method, req.url);
 	next();
});
//************************************ FIN DEL MIDDLEWARE PARA INTERCEPTAR LAS RUTAS QUE QUEREMOS *****************************************

//************************************ DEFINICION DE LAS RUTAS DEL ADMIN ROUTE ************************************************************
adminRouter.get('/', admin.getAll);
adminRouter.get('/users', admin.getById);
adminRouter.get('/users/:name', admin.getByName);

//********************************** FIN DE LA DEFINICION DE RUTAS PARA EL ADMIN ROUTE **************************************************** 

//********************************** DEFINICION DE LAS RUTAS PARA PROMOS ******************************************************************
promoRouter.get('/', promos.getAll);
promoRouter.get('/:id', promos.getById);
promoRouter.get('/promo/:name', promos.getByName);

//********************************** FIN DE LAS RUTAS DE PROMOS ***************************************************************************

//********************************** DEFINICION DE LAS RUTAS PARA LA PARTE DE USUARIOS ****************************************************
userRouter.get('/', users.getAll);
userRouter.get('/profile', users.getById);
userRouter.get('/profile/:name', users.getByName);
 
//********************************** FIN DE LA DEFINICION DE RUTAS PARA LA PARTE DE USUARIOS **********************************************

//********************************** DEFINICION DE LAS RUTAS BASICAS **********************************************************************
basicRouter.get('/', basic.getAll);
basicRouter.get('/login', basic.getById);

//procesamos el formulario (POST http://localhost:7777/login)
basicRouter.post(basic.saveUser);
//********************************** FIN DE LAS RUTAS BASICAS ******************************************************************************

//********************************** DEFINICION DE LOS PATHS DE INICIO PARA LAS RUTAS DEFINIDAS ********************************************
app.use('/',basicRouter);
//aplicamos las rutas de admin a nuestra aplicación, app
app.use('/admin', adminRouter);
//aplicamos las rutas de usuario a nuestra aplicación, app
app.use('/user', userRouter);
//aplicamos las rutas de promociones a nuestra aplicación, app
app.use('/promos', promoRouter);
//********************************** FIN DE LA DEFINICION DE LOS PATHS DE INICIO DE LAS RUTAS *********************************************

//************************************* INICIAMOS EL SERVIDOR ******************************************************************************
app.listen(port);
console.log('¡7777 es un puerto maravilloso!');
//************************************* FIN ************************************************************************************************