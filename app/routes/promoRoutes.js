var express = require('express');
var app = express();
var bodyParser = require('body-parser');
Promo = require('../model/promo');

module.exports = function(app){
	app.use(bodyParser.json());
	app.get('/promo', function(req, res){
	  //Find all the books in the system.
	  Promo.find({}, function(err, result){
	    if ( err ) throw err;
	    //Save the result into the response object.
	    res.json(result);
	  });
	});
	app.get('/promo/:id', function(req, res){
	  //Find all the books in the system.
	  Promo.findOne({_id: req.params.id}, function(err, result){
	    if ( err ) throw err;
	    //Save the result into the response object.
	    res.json(result);
	  });
	});

	app.get('/promo/name/:name', function(req, res){
	  //Find all the books in the system.
	  Promo.find({nombre: req.params.name}, function(err, result){
	    if ( err ) throw err;
	    //Save the result into the response object.
	    res.json(result);
	  });
	});
	app.get('/promo/enterprise/:enterprise', function(req, res){
	  //Find all the books in the system.
	  Promo.find({empresa: req.params.enterprise}, function(err, result){
	    if ( err ) throw err;
	    //Save the result into the response object.
	    res.json(result);
	  });
	});
	app.get('/promo/provider/:provider', function(req, res){
	  //Find all the books in the system.
	  Promo.find({proveedor: req.params.provider}, function(err, result){
	    if ( err ) throw err;
	    //Save the result into the response object.
	    res.json(result);
	  });
	});
	app.get('/promo/datefrom/:datefrom', function(req, res){
	  //Find all the books in the system.
	  Promo.find({fdesde: req.params.datefrom}, function(err, result){
	    if ( err ) throw err;
	    //Save the result into the response object.
	    res.json(result);
	  });
	});
	app.get('/promo/dateto/:dateto', function(req, res){
	  //Find all the books in the system.
	  Promo.find({fhasta: req.params.dateto}, function(err, result){
	    if ( err ) throw err;
	    //Save the result into the response object.
	    res.json(result);
	  });
	});
	app.get('/promo/system/:medio', function(req, res){
	  //Find all the books in the system.
	  Promo.find({medio: req.params.medio}, function(err, result){
	    if ( err ) throw err;
	    //Save the result into the response object.
	    res.json(result);
	  });
	});

	app.get('/promo/city/:city', function(req, res){
	  //Find all the books in the system.
	  Promo.find({poblacion: req.params.city}, function(err, result){
	    if ( err ) throw err;
	    //Save the result into the response object.
	    res.json(result);
	  });
	});
	app.post("/promo", function(req, res){
//	  console.log("Adding new Promo: " + req.body.nombre);
	  var promo = new Promo({
	  	nombre:     req.body.nombre,
		empresa:    req.body.empresa,
		proveedor:  req.body.proveedor,
		urlpromo:   req.body.urlpromo,
	  	fdesde:     req.body.fdesde,
	  	fhasta:     req.body.fhasta,
	  	verificada: req.body.verificada,
	  	descripcion:req.body.descripcion,
	  	pais:		req.body.pais,
	  	provincia:  req.body.provincia,
	  	poblacion:  req.body.poblacion,
	  	medio:      req.body.medio,
	  	falta:      req.body.falta,
	  	condiciones:req.body.condiciones
	  });

	  //Saving the model instance to the DB
	  promo.save(function(err, result){
	    if ( err ) throw err;
	    //After successfully saving the book we generate a JSON response with the
	    //message and the inserted book information.
	    res.json({
	      messaage:"Successfully added promo",
	      promo:result
	    });
	   });
	});
	//Update an existing promo
	app.put("/promo/:id", function(req, res){
	  Promo.findOne({_id: req.params.id}, function(err, result){
	    if ( err ) throw err;

	    if(!result){
	      res.json({
	        message:"Promo with id: " + req.params.id+" not found.",
	      });
	    }
//	    console.log('Promo: '+result.nombre+' y por parametro:'+req.body.nombre);
	    result.nombre =    req.body.nombre,
		result.empresa=    req.body.empresa,
		result.proveedor=  req.body.proveedor,
		result.urlpromo=   req.body.urlpromo,
	  	result.fdesde=     req.body.fdesde,
	  	result.fhasta=     req.body.fhasta,
	  	result.verificada= req.body.verificada,
	  	result.descripcion=req.body.descripcion,
	  	result.pais=	   req.body.pais,
	  	result.provincia=  req.body.provincia,
	  	result.poblacion=  req.body.poblacion,
	  	result.medio=      req.body.medio,
	  	result.falta=      req.body.falta,
	  	result.condiciones=req.body.condiciones;

	    result.save(function(err, result){
	      if ( err ) throw err;
	      res.json({
	        message:"Successfully updated the promo",
	        promo: result
	      });
	    });
	  });
	});
	//Delete an existing promo
	app.delete("/promo/:id", function(req, res){
	  Promo.findOneAndRemove({_id: req.params.id}, function(err, result){
	      res.json({
	        message: "Successfully deleted the promo",
	        promo: result
	      });
	  });
	});

}