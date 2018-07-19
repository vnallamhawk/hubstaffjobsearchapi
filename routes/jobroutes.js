'use strict';
module.exports = function(app){
	var jobList = require('../controller/jobsController');
	
	app.route('/jobs')
	.get(jobList.list_all_jobs)
	
	
}