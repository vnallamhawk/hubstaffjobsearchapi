var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
	rolename:String,
	qty : Number,
	skills : [String],
	type : [String],
	updated: { type: Date, default: Date.now },
	company : String,
	description : String,
	state : String,
	city : String,
	rate : Number,
	experience : String,
	country : String,
	language : [String]
})

module.exports = mongoose.model('Jobs',jobSchema);