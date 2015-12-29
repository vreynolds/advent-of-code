var fs = require('fs');
var climber = require('../src/day1-stairs');

fs.readFile('./1-santa-stairs.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(climber.basement(data));
});