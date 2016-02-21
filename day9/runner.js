var fs = require('fs');
var calculator = require('../src/day9-distances');

fs.readFile('./input.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log('shortest', calculator.shortest(data));
	console.log('longest', calculator.longest(data));
});