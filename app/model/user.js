var Schema = require('mongoose').Schema;

var user_schema = new Schema({
	firstname:String,
	lastname:String,
	username:String
});

module.exports = user_schema;