'use strict'
var mongoose = require('mongoose'),
Jobs = mongoose.model('Jobs');

exports.list_all_jobs = function(req,res){
	console.log(req.query);
	
	Jobs.find(req.query,function(err,job){
		if(err)
			res.send(err);
		res.json(job);
	});	
}