var express = require('express'),
app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
Jobs     = require('./models/jobs'),
bodyParser = require('body-parser'),
router=express.Router();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rakeshn:rakesh123@ds141671.mlab.com:41671/hubstaff');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/jobroutes');
var topJobs = require('./routes/topjobs');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
routes(app);
topJobs(app);

app.listen(port);
//var http= require('http');
//var mongoDB = require('mongoDB');
//var MongoClient = mongoDB.MongoClient;
//var url = 'mongodb://rakeshn:rakesh123@ds141671.mlab.com:41671/hubstaff'

//var server = http.createServer(app).listen(port,function(){
//	console.log("application listening on port",port);
//});

//var db = mongoose.connection;
//console.log(db);

var db = mongoose.connection;
console.log(db);
 db.collection("jobs").insertMany([{
		rolename: "Junior .Net Developer",
		qty: 25,
		skills: [".Net"],
  		type : ["Hourly"],
  		company : "Epic Coder",
  		description : "Looking for .Net folks",
  		state : "san francisco",
  		city : "california",
  		rate : 80,
  		experiencelevel : "Junior",
  		country : "United States",
  		languages : ["English"]
	},
 {
		rolename: "Senior Scala Developer",
		qty: 25,
		skills: ["Scala"],
  		type : ["Part-Time"],
  		company : "Apple",
  		description : "Looking for Scala Developer",
  		state : "illinois",
  		city : "chicago",
  		rate : 44,
  		experiencelevel : "Senior",
  		country : "United States",
  		languages : ["French"]
	},
	{
		rolename: "Junior Mainframe Developer",
		qty: 25,
		skills: ["Mainframe"],
  		type : ["Part-Time"],
  		company : "Apple",
  		description : "Looking for mainframe Developer",
  		state : "illinois",
  		city : "chicago",
  		rate : 34,
  		experiencelevel : "Junior",
  		country : "United States",
  		languages : ["English"]
	},
	{
		rolename: "Junior Abinishio Developer",
		qty: 25,
		skills: ["abhinishio"],
  		type : ["Part-Time"],
  		company : "Apple",
  		description : "Looking for mainframe Developer",
  		state : "los angeles",
  		city : "california",
  		rate : 34,
  		experiencelevel : "Junior",
  		country : "United States",
  		languages : ["English"]
	},
		{
		rolename: "SQL Developer",
		qty: 25,
		skills: ["SQL"],
  		type : ["Part-Time"],
  		company : "Apple",
  		description : "Looking for sql Developer",
  		state : "los angeles",
  		city : "california",
  		rate : 30,
  		experiencelevel : "Junior",
  		country : "United States",
  		languages : ["English"]
	},
	{
		rolename: "Junior Java Developer",
		qty: 25,
		skills: ["Java"],
  		type : ["Part-Time"],
  		company : "Apple",
  		description : "Looking for sql Developer",
  		state : "los angeles",
  		city : "california",
  		rate : 30,
  		experiencelevel : "Junior",
  		country : "United States",
  		languages : ["English"]
	}
	
]);


//db.collection('jobs').update({},{$set : {"clicks":1}},false,true)


//mongoose.jobs.update({}, {$set: {"clicks": 1}}, false, true)

//console.log(db);
 
//init();

// Use connect method to connect to the Server
function init() {
  connectingDb = new Promise(
    function (resolve, reject) {
      MongoClient.connect(url, function (err, db) {
        if (err) {
          console.log('Unable to connect to the mongoDB server. Error:', err);
          reject(err);
        }
        else {
          console.log('Connection established to', url);

          //Close connection
          //db.close();
		  console.log(db);
          //resolve(db);
        }
      });

    }
  );
}
