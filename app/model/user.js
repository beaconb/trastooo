var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user_schema = new Schema({
	name: {type:String},
  	surename: {type:String},
  	username: {type:String},
  	hash: {type:String},
  	falta: {type:String}
});
module.exports = mongoose.model('users', user_schema)
//module.exports = mongoose.model('users', user_schema);