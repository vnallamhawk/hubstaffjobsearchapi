'use strict'
var mongoose = require('mongoose');
var mongodb = require("mongodb");
var BSONRegExp = mongodb.BSONRegExp,
Jobs = mongoose.model('Jobs');
//db.users.find(name: new RegExp(search， ‘i')) //For substring search, case insensitive


exports.list_all_jobs = function(req,res){
	 var payRate = undefined!==req.query["payRate"]&&req.query["payRate"]!=""? req.query["payRate"].split(","): "";
	 //console.log(req.query["availability"]);
	 var availability = req.query["availability"]!=""?req.query["availability"].split(",") :""
	 console.log(availability);
	 //var regexKeywords = new BSONRegExp(\\.\\*req.query["keywords"]\\.\\*","i");
	 
	 var query = {
        "$or": [
			{
                "skills": {
                    "$in": [
                        req.query["skills"]
                    ]
                }
            },
			{
                "type": {
                    "$in": availability
                }
            },
            {
                "rate": {
                    "$gte": payRate[0],
					"$lte": payRate[1]
                }
            },
            {
                "experiencelevel": req.query["experienceLevel"]
            },
            {
                "country": req.query["country"] 
            },
            {
                "languages": {
                    "$in": [
                        req.query["languages"]
                    ]
                }
            }
        ]
    }
	
	 if(req.query["keywords"]!==""){
		 query.rolename = new RegExp(req.query["keywords"],'i');
	 }	

	Jobs.find(query,function(err,job){
		if(err)
			res.send(err);
		res.json(job);
	});	
}