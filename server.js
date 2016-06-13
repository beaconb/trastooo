var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port  	 = process.env.PORT || 7777;

//*********************************** ESTABLECEMOS LA CONEXION A LA BB.DD. ************************************************************

mongoose.connect('mongodb://localhost/trastooo');

app.use(bodyParser.json());

require('./app/routes/promoRoutes')(app);
require('./app/routes/userRoutes')(app);

//************************************* INICIAMOS EL SERVIDOR ******************************************************************************
app.listen(port);
console.log('¡7777 es un puerto maravilloso!');
//************************************* FIN ************************************************************************************************