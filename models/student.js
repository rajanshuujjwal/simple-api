var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var productSchema = new mongoose.Schema({
	name : String,
	roll : Number,
	email : String,
	mobile : Number
})

module.exports = restful.model('Students', productSchema)