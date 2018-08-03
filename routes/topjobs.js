'use strict';
module.exports = function(app){
	var jobList = require('../controller/topJobsController');
	app.route('/topjobs')
	.get(jobList.list_top_jobs)
}

