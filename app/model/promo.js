var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var promo_schema = new Schema({
	nombre:     { type:String},
	empresa:    { type:String},
	proveedor:  { type:String},
	urlpromo:   { type: String },
  	fdesde:     { type: String },
  	fhasta:     { type: String },
  	verificada: { type: String, enum:['S','N'] },
  	descripcion:{ type: String },
  	pais:		{ type: String },
  	provincia:  { type: String },
  	poblacion:  { type: String },
  	medio:      { type: String, enum:['ON', 'OFF', 'ONF'] },
  	falta:      { type: String },
  	condiciones:{ type:String}
});

 module.exports = mongoose.model('promos',promo_schema);

//module.exports = mongoose.model('Promo', promo_schema); ;