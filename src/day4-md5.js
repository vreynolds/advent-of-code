var md5 = require('md5');
var s = require('underscore.string');

var findHash = function(secret, startingSequence) {
	var answer;
	var candidate = 1;

	while(!answer) {
		var hash = md5(secret + candidate);
		if(s.startsWith(hash, startingSequence)) {
			answer = candidate;
		}
		candidate++;
	}

	return answer;
};

module.exports = {
	findHash: findHash
};