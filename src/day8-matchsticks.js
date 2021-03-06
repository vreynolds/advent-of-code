var counter = function() {
	var totalCharacters = 0;
	var stringLength = 0;
	var encodedLength = 0;

	var escaping = false;
	var escapingASCII = false;
	var asciiLength = 0;
	var totalASCIICharacters = 3;

	var add = function(input) {
		var character = input.trim();
		if (character.length > 0) {
			totalCharacters++;
			encodedLength++;

			if (character === '"' || character === '\\') {
				encodedLength++;
			}

			if(character === '"' && !escaping) {
				encodedLength++;
			}

			if (escaping) {
				if (escapingASCII) {
					asciiLength++;
					if (asciiLength === totalASCIICharacters) {
						stringLength++;

						escaping = false;
						escapingASCII = false;
						asciiLength = 0;
					}
				} else {
					if (character === 'x') {
						escapingASCII = true;
						asciiLength = 1;
					} else {
						stringLength++;
						escaping = false;
					}
				}
			} else if (character === '\\') {
				escaping = true;
			} else if (character !== '"') {
				stringLength++;
			}
		}
	};

	var getTotal = function() {
		return totalCharacters;
	};

	var getStringLength = function() {
		return stringLength;
	};

	var getEncodedLength = function() {
		return encodedLength;
	};

	return {
		add: add,
		total: getTotal,
		stringLength: getStringLength,
		encodedLength: getEncodedLength
	}
};

module.exports = {
	counter: counter
};