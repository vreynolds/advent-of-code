var analyzer = require('../src/day16-sue');
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }

    var criteria1 = {
        children: '3',
        cats: '7',
        samoyeds: '2',
        pomeranians: '3',
        akitas: '0',
        vizslas: '0',
        goldfish: '5',
        trees: '3',
        cars: '2',
        perfumes: '1'
    };

    var criteria2 = {
        children: '3',
        cats: '>7',
        samoyeds: '2',
        pomeranians: '<3',
        akitas: '0',
        vizslas: '0',
        goldfish: '<5',
        trees: '>3',
        cars: '2',
        perfumes: '1'
    };
    console.log('Part1 which Sue', analyzer.whichSue(data, criteria1));
    console.log('Part1 the real Sue', analyzer.whichSue(data, criteria2));
});