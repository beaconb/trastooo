var mongoose = require('mongoose');
var Schema = mongose.Schema;

var promo_schema = new Schema({
	nombre:{ type:String},
	empresa:{ type:String},
	proveedor:{ type:String},
	url:{ type:String},
	descripcion:{ type:String},
	condiciones:{ type:String}
});

module.exports = mongoose.model('Promo', promo_schema); ;