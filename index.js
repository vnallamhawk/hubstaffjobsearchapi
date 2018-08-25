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

var db = mongoose.connection;
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

function init() {
  connectingDb = new Promise(
    function (resolve, reject) {
      MongoClient.connect(url, function (err, db) {
        if (err) {
          reject(err);
        }
      });
    }
  );
}
