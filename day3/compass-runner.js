var fs = require('fs');
var compass = require('../src/day3-compass');

fs.readFile('./compass-directions.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(compass.superDeliver(data));
});