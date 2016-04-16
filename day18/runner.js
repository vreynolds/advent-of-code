var animator = require('../src/day18-animation');
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log('part1', animator.light(data, 100));
});