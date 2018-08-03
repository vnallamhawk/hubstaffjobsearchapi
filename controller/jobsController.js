'use strict'
var mongoose = require('mongoose');
var mongodb = require("mongodb");
var BSONRegExp = mongodb.BSONRegExp,
Jobs = mongoose.model('Jobs');
exports.list_all_jobs = function(req,res){
	 var payRate = undefined!==req.query["payRate"]&&req.query["payRate"]!=""? req.query["payRate"].split(","): "";
	 console.log(payRate);
	 //console.log(req.query["availability"]);
	 var availability = undefined!==req.query["availability"]&& req.query["availability"]!=""?req.query["availability"].split(",") :""
	 console.log(availability);
	 //var regexKeywords = new BSONRegExp(\\.\\*req.query["keywords"]\\.\\*","i");
	 
	 var query = {
        "$or": [
		{
			"rolename" : new RegExp(req.query["keywords"],'i')
		},
		{
			"description" : new RegExp(req.query["keywords"],'i')
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
	
	// "$and" : [
           // {
                // "skills": {
                    // "$in": [
                        // req.query["skills"]
                    // ]
                // }
            // },
        // ]
	 // filter the search by any criteria given by the user
		query['$and']=[];
		if(req.query.skills!==""){ 
		//query['$and']=[];
		console.log("inside1");// if the criteria has a value or values
		query["$and"].push({ skills: {$in: req.query["skills"]}}); // add to the query object
		}
		if(req.query.availability!==""){ 
		//query['$and']=[];
		console.log("inside2");// if the criteria has a value or values
		query["$and"].push({ type: {$in: req.query["availability"]}}); // add to the query object
		}
		if(req.query.jobType!==""){ 
		//query['$and']=[];
		//console.log("inside2");// if the criteria has a value or values
		query["$and"].push({ type: {$in: req.query["jobType"]}}); // add to the query object
		}
		if(req.query.payRate!==""){ 
		query["$and"].push({ rate: {
                    "$gte": payRate[0],
					"$lte": payRate[1]
                }}); // add to the query object
		}
		if(req.query.experienceLevel!==""){ 
		query["$and"].push({
                "experiencelevel": req.query["experienceLevel"]
            }); // add to the query object
		}
		if(req.query.country!==""){ 
		query["$and"].push({
                "country": req.query["country"] 
            }); // add to the query object
		}
		if(req.query.languages!==""){ 
		query["$and"].push({
                "languages": {
                    "$in": [
                        req.query["languages"]
                    ]
                }
            }); // add to the query object
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



