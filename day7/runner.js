var fs = require('fs');
var circuit = require('../src/day7-circuit');

fs.readFile('./circuit.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log('part 1:',circuit.run(data));
});

fs.readFile('./circuit2.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log('part 2:',circuit.run(data));
});