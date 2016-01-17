var fs = require('fs');
var judge = require('../src/day5-strings');

fs.readFile('./nice-naughty.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	var strings = data.split('\n');
	var niceStringCount = 0;
	var nicerStringCount = 0;

	for (var i = 0; i < strings.length; i++) {
		if (judge.isNice(strings[i])) {
			niceStringCount++;
		}
		if (judge.isNicer(strings[i])) {
			nicerStringCount++;
		}
	}

	console.log('Nice strings: ' + niceStringCount);
	console.log('Nicer strings: ' + nicerStringCount);
});