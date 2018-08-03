'use strict'
var mongoose = require('mongoose');
//console.log(mongoose);
var Jobs = mongoose.model('Jobs');
exports.list_top_jobs=function(req,res){
	
	Jobs.find({},function(err,job){
			if(err)
			res.send(err);
		res.json(job);
	}).sort({click:1}).limit(2)
}
