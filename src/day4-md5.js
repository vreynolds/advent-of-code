var md5 = require('md5');
var _s = require('underscore.string');

var findHash = function(secret) {
	var answer;
	var candidate = 1;

	while(!answer) {
		var hash = md5(secret + candidate);
		if(_s.startsWith(hash, '00000')) {
			answer = candidate;
		}
		candidate++;
	}

	return answer;
};

module.exports = {
	findHash: findHash
};