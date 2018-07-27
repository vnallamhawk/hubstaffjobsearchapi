'use strict'
var mongoose = require('mongoose'),
Jobs = mongoose.model('Jobs');

exports.list_all_jobs = function(req,res){
	 var payRate = undefined!==req.query["payRate"]&&req.query["payRate"]!=""? req.query["payRate"].split(","): "";
	 console.log(payRate);
	 var query = {
        "$or": [
            {
                "rolename": req.query["keywords"]
            },
            {
                "skills": {
                    "$in": [
                        req.query["skills"]
                    ]
                }
            },
            {
                "type": {
                    "$in": [
                        req.query["jobType"]
                    ]
                }
            },
            {
                "rate": {
                    "$gte": payRate[0]
                }
            },
            {
                "$and": [
                    {
                        "rate": {
                            "$lte": payRate[1]
                        }
                    }
                ]
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
    };
	Jobs.find(query,function(err,job){
		if(err)
			res.send(err);
		res.json(job);
	});	
}