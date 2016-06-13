var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port  	 = process.env.PORT || 7777;

//*********************************** ESTABLECEMOS LA CONEXION A LA BB.DD. ************************************************************

mongoose.connect('mongodb://localhost/trastooo');

require('./app/routes/promoRoutes')(app);
require('./app/routes/userRoutes')(app);

//************************************* INICIAMOS EL SERVIDOR ******************************************************************************
app.listen(port);
console.log('¡7777 up and listen!');
//************************************* FIN ************************************************************************************************