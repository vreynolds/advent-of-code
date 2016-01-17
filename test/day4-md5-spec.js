var md5 = require('md5');
var adventCoin = require('../src/day4-md5');

describe('Day 4: Advent Coin Hash', function() {
	it('finds correct small number which produces at lease 5 leading zeros hash', function() {
		expect(adventCoin.findHash('abcdef60904', '00000')).toBe(3);
	});

});