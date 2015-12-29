var fs = require('fs');
var judge = require('../src/day5-strings');

fs.readFile('./nice-naughty.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	var strings = data.split('\n');
	var niceStringCount = 0;

	for (var i = 0; i < strings.length; i++) {
		if (judge.isNice(strings[i])) {
			niceStringCount++;
		}
	}

	console.log(niceStringCount);
});