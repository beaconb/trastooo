var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port  	 = process.env.PORT || 7777;

//*********************************** ESTABLECEMOS LA CONEXION A LA BB.DD. ************************************************************

mongoose.connect('mongodb://beaconb:Trast000@ds013584.mlab.com:13584/trastooo');
//mongoose.connect('mongodb://localhost/trastooo');

require('./app/routes/promoRoutes')(app);
require('./app/routes/userRoutes')(app);
require('./app/routes/mailRoutes')(app);

//************************************* INICIAMOS EL SERVIDOR ******************************************************************************
app.listen(port);
console.log('¡7777 up and listen!');
//************************************* FIN ************************************************************************************************