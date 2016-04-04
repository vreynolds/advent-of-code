var cookies = require('../src/day15-cookies');
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    
    console.log('part1 best score', cookies.bestScore(data, 100));
});