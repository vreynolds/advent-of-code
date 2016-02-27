var length = function(input, numberOfPlays) {
	if(numberOfPlays === 0) {
		return '';
	}

	var result = input;
	for (var i = 0; i < numberOfPlays; i++) {
		result = singlePlay(result);
	}
	return result;
};

var singlePlay = function(input) {
	var result = '';
	var currentDigit;
	var quantifier = 0;

	if (input) {

		for (var i = 0; i <= input.length; i++) {
			var nextDigit = input[i];

			if (currentDigit === undefined || currentDigit === nextDigit) {
				quantifier++;
			} else {
				result += (quantifier + currentDigit);
				quantifier = 1;
			}

			currentDigit = nextDigit;
		}
	}

	return result;
};

module.exports = {
	length: length
};