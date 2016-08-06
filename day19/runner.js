var animator = require('../src/day19-reindeer');
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log('part1', animator.light(data, 100));
});