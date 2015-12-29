var hash = require('../src/day4-md5');

var secret = process.argv[2];
console.log(hash.findHash(secret));