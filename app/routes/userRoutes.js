var express = require('express');
var app = express();
var bodyParser = require('body-parser');

User = require('../model/user');

module.exports = function(app){
//  app.use(bodyParser.json());
  app.get('/user', function(req, res){
    //Find all the books in the system.
    User.find({}, function(err, users){
      if ( err ) res.send(err);
      //Save the result into the response object.
      res.json(users);
    });
  });
  app.get('/user/:id', function(req, res){
    //Find all the books in the system.
    User.findOne({_id: req.params.id}, function(err, user){
      if ( err ) res.send(err);
      //Save the result into the response object.
      res.json(user);
    });
  });

  app.post("/user", function(req, res){
  //  console.log("Adding new Promo: " + req.body.name);
    var userParam = new User({
    	name: req.body.name,
      surename:req.body.surename,
      username: req.body.username,
      hash: req.body.hash,
      falta: req.body.falta
    });

    //Saving the model instance to the DB
    User.save(function(err, user){
      if ( err ) throw err;
      //After successfully saving the book we generate a JSON response with the
      //message and the inserted book information.
      res.json({
        messaage:"Successfully added user",
        userParam:user
      });
     });
  });
  //Update an existing promo
  app.put("/user/:id", function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
      if ( err ) res.send(err);

      if(!user){
        res.json({
          message:"User with id: " + req.params.id+" not found.",
        });
      }
//      console.log('User: '+result.name+' y por parametro:'+req.body.name);
      user.name   = req.body.name;
      user.surename   = req.body.surename;
      user.username = req.body.username;
      user.hash  = req.body.hash;
      user.falta = req.body.falta;

      user.save(function(err, userResult){
        if ( err ) res.send(err);
        res.json({
          message:"Successfully updated the user",
          user: userResult
        });
      });
    });
  });
  //Delete an existing promo
  app.delete("/user/:id", function(req, res){
    User.findOneAndRemove({_id: req.params.id}, function(err, userResult){
        res.json({
          message: "Successfully deleted the user",
          user: userResult
        });
    });
  });
}