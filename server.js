var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port  	 = process.env.PORT || 7777;

//*********************************** ESTABLECEMOS LA CONEXION A LA BB.DD. ************************************************************



    app.use(express.static(__dirname + '/angular'));

//mongoose.connect('mongodb://beaconb:Trast000@ds013584.mlab.com:13584/trastooo');
//mongoose.connect('mongodb://admin:ZDeS1YiP4zLp@ex-std-node380.prod.rhcloud.com/trastooo');
mongoose.connect('mongodb://localhost/trastooo');

require('./app/routes/promoRoutes')(app);
require('./app/routes/userRoutes')(app);
require('./app/routes/mailRoutes')(app);

 app.get('*', function(req, res) {
        res.sendfile('./angular/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

//************************************* INICIAMOS EL SERVIDOR ******************************************************************************
app.listen(port);
console.log('¡7777 up and listen!');
//************************************* FIN ************************************************************************************************