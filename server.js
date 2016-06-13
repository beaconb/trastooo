var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port  	 = process.env.PORT || 7777;

//*********************************** ESTABLECEMOS LA CONEXION A LA BB.DD. ************************************************************
mongoose.connect('mongodb://localhost/trastooo');

var promoSchema = mongoose.Schema({
  name: String,
  url: String,
  provider: String,
  fdesde: String,
  fhasta: String
});

var userSchema = mongoose.Schema({
  name: String,
  surename: String,
  username: String,
  hash: String,
  falta: String
});

var Promo = mongoose.model('promos',promoSchema);
var User = mongoose.model('users',userSchema);
mongoose.connection;

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

app.post("/promo", function(req, res){
//  console.log("Adding new Promo: " + req.body.name);
  var promo = new Promo({
    name:req.body.name,
    provider: req.body.provider,
    url: req.body.url,
    fdesde: req.body.fdesde,
    fhasta: req.body.fhasta
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
    console.log('Promo: '+result.name+' y por parametro:'+req.body.name);
    result.name   = req.body.name;
    result.provider   = req.body.provider;
    result.url = req.body.url;
    result.fdesde  = req.body.fdesde;
    result.fhasta = req.body.fhasta;

    result.save(function(err, result){
      if ( err ) throw err;
      res.json({
        message:"Successfully updated the promo",
        promo: result
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
  });
});

app.get('/user', function(req, res){
  //Find all the books in the system.
  User.find({}, function(err, result){
    if ( err ) throw err;
    //Save the result into the response object.
    res.json(result);
  });
});
app.get('/user/:id', function(req, res){
  //Find all the books in the system.
  Promo.findOne({_id: req.params.id}, function(err, result){
    if ( err ) throw err;
    //Save the result into the response object.
    res.json(result);
  });
});

app.post("/user", function(req, res){
//  console.log("Adding new Promo: " + req.body.name);
  var user = new User({
  	name: req.body.name,
  surename:req.body.surename,
  username: req.body.username,
  hash: req.body.hash,
  falta: req.body.flata
  });

  //Saving the model instance to the DB
  user.save(function(err, result){
    if ( err ) throw err;
    //After successfully saving the book we generate a JSON response with the
    //message and the inserted book information.
    res.json({
      messaage:"Successfully added user",
      user:result
    });
   });
});
//Update an existing promo
app.put("/user/:id", function(req, res){
  User.findOne({_id: req.params.id}, function(err, result){
    if ( err ) throw err;

    if(!result){
      res.json({
        message:"User with id: " + req.params.id+" not found.",
      });
    }
    console.log('User: '+result.name+' y por parametro:'+req.body.name);
    result.name   = req.body.name;
    result.surename   = req.body.surename;
    result.username = req.body.username;
    result.hash  = req.body.hash;
    result.falta = req.body.falta;

    result.save(function(err, result){
      if ( err ) throw err;
      res.json({
        message:"Successfully updated the promo",
        user: result
      });
    });
//Delete an existing promo
app.delete("/user/:id", function(req, res){
  User.findOneAndRemove({_id: req.params.id}, function(err, result){
      res.json({
        message: "Successfully deleted the promo",
        user: result
      });
  });
});
  });
});

//************************************* INICIAMOS EL SERVIDOR ******************************************************************************
app.listen(port);
console.log('¡7777 es un puerto maravilloso!');
//************************************* FIN ************************************************************************************************