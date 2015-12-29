var _s = require('underscore.string');

var isVowel = function(character) {
	return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u';
}

var isNice = function(string) {
	var numberOfVowels = 0;
	var doubleCharacter = false;

	var previousCharacter;
	for (var i = 0; i < string.length; i++) {
		var character = string.charAt(i);

		if(isVowel(character)) {
			numberOfVowels++;
		}

		if (!doubleCharacter && (previousCharacter === character)) {
			doubleCharacter = true;
		}

		previousCharacter = character;
	};
	return numberOfVowels > 2 && doubleCharacter && !_s.include(string, 'ab') && !_s.include(string, 'cd') && !_s.include(string, 'pq') && !_s.include(string, 'xy');
};

module.exports = {
	isNice: isNice
};