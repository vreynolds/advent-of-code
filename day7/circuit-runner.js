var fs = require('fs');
var circuit = require('../src/day7-circuit');

fs.readFile('./circuit.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(circuit.run(data));
});