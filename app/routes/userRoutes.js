var express = require('express');
var app = express();
var bodyParser = require('body-parser');

User = require('../model/user');

module.exports = function(app){
  app.use(bodyParser.json());
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
    User.findOne({_id: req.params.id}, function(err, result){
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
      falta: req.body.falta
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
//      console.log('User: '+result.name+' y por parametro:'+req.body.name);
      result.name   = req.body.name;
      result.surename   = req.body.surename;
      result.username = req.body.username;
      result.hash  = req.body.hash;
      result.falta = req.body.falta;

      result.save(function(err, result){
        if ( err ) throw err;
        res.json({
          message:"Successfully updated the user",
          user: result
        });
      });
    });
  });
  //Delete an existing promo
  app.delete("/user/:id", function(req, res){
    User.findOneAndRemove({_id: req.params.id}, function(err, result){
        res.json({
          message: "Successfully deleted the user",
          user: result
        });
    });
  });
}