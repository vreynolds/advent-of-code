var meter = require('../src/day14-olympics');
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }

    console.log('part1', meter.winningDistance(data, 2503));
    console.log('part2', meter.winningPoints(data, 2503));
});