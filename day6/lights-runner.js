var fs = require('fs');
var grid = require('../src/day6-lights');

fs.readFile('./lights copy.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(grid.light(data));
});