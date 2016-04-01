var seater = require('../src/day13-dinner');
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }

    console.log('part1', seater.optimize(data));
});