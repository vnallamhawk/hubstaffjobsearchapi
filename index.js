var express = require('express'),
app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
Jobs     = require('./models/jobs'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rakeshn:rakesh123@ds141671.mlab.com:41671/hubstaff');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/jobRoutes');
routes(app);
app.listen(port);
//var http= require('http');
//var mongoDB = require('mongoDB');
//var MongoClient = mongoDB.MongoClient;
//var url = 'mongodb://rakeshn:rakesh123@ds141671.mlab.com:41671/hubstaff'

//var server = http.createServer(app).listen(port,function(){
//	console.log("application listening on port",port);
//});

/* var db = mongoose.connection;
console.log(db);

db.collection("jobs").insertMany([{
		rolename: "Senior PHP Developer",
		qty: 25,
		skills: ["UI", "UX","Android","Javascript"],
  		type : ["Full-Time","Part-Time","Hourly"],
  		company : "Epic Coder",
  		description : "Looking for talented folks",
  		state : "illinois",
  		city : "chicago",
  		rate : 44,
  		experiencelevel : "Senior",
  		country : "United States",
  		languages : ["English,French"]
	},
 {
		rolename: "Senior Nodejs Developer",
		qty: 25,
		skills: ["UI", "UX","Android","Javascript","NodeJs"],
  		type : ["Full-Time","Part-Time","Hourly"],
  		company : "Epic Coder",
  		description : "Looking for talented folks",
  		state : "illinois",
  		city : "chicago",
  		rate : 44,
  		experiencelevel : "Senior",
  		country : "United States",
  		languages : ["English,French"]
	}
	
]); */
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
