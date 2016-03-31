var counter = require('../src/day12-accounting');
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log('total numbers', counter.totalNumbers(data));
	console.log('redless total numbers', counter.totalNumbers(data, true));
});