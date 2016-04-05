var containers = require('../src/day17-containers');
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log('part1 combinations', containers.getCombinations(data, 150));
    console.log('part1 minimized combinations', containers.getCombinations(data, 150, true));
});