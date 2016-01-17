var s = require('underscore.string');
var _ = require('underscore');

var isVowel = function(character) {
	return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u';
}

var isNice = function(string) {
	var numberOfVowels = 0;
	var doubleCharacter = false;

	var previousCharacter;
	for (var i = 0; i < string.length; i++) {
		var character = string.charAt(i);

		if (isVowel(character)) {
			numberOfVowels++;
		}

		if (!doubleCharacter && (previousCharacter === character)) {
			doubleCharacter = true;
		}

		previousCharacter = character;
	};
	return numberOfVowels > 2 && doubleCharacter && !s.include(string, 'ab') && !s.include(string, 'cd') && !s.include(string, 'pq') && !s.include(string, 'xy');
};

var isNicer = function(string) {
	var multiplePairs = false;
	var sandwichedLetter = false;

	var firstLetter, secondLetter, thirdLetter;
	for (var i = 0; i < string.length; i++) {
		firstLetter = secondLetter;
		secondLetter = thirdLetter;
		thirdLetter = string.charAt(i);

		if (secondLetter !== undefined) {
			var pair = secondLetter + thirdLetter;
			if (stringContainsMoreThanOne(string, pair)) {
				multiplePairs = true;
			}
		}

		if (firstLetter !== undefined) {
			if (firstLetter == thirdLetter) {
				sandwichedLetter = true;
			}
		}

		if (multiplePairs && sandwichedLetter) break;
	}

	return multiplePairs && sandwichedLetter;
};

var stringContainsMoreThanOne = function(string, substring) {
	return s.count(string, substring) > 1;
};

module.exports = {
	isNice: isNice,
	isNicer: isNicer
};