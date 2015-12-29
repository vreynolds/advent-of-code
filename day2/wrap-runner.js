var fs = require('fs');
var kata = require('../src/day2-wrap');

fs.readFile('./dims.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	var dims = data.split('\n');
	var totalWrap = 0;
	var totalRibbon = 0;

	for (var i = 0; i < dims.length; i++) {
		totalWrap += kata.wrap(dims[i]);
		totalRibbon += kata.totalRibbon(dims[i]);
	}
	console.log(totalRibbon);
});