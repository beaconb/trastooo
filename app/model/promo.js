var Schema = require('mongoose').Schema;

var promo_schema = new Schema({
	nombre:String,
	empresa:String,
	proveedor:String,
	url:String,
	descripcion:String,
	condiciones:String
});

module.exports = promo_schema;