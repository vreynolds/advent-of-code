var fs = require('fs');
var _s = require('underscore.string');
var matchsticks = require('../src/day8-matchsticks');

var readable = fs.createReadStream("./matchsticks.txt", {
	encoding: 'utf8',
	fd: null,
});
readable.on('readable', function() {
	console.log('starting')
	var counter = new matchsticks.counter();
	var chunk;
	while (null !== (chunk = readable.read(1))) {
		counter.add(chunk);
	}
	console.log(counter.total() - counter.stringLength());
});