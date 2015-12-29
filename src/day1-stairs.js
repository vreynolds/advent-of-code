var climb = function(instructions) {
	var currentFloor = 0;
	for (var i = 0; i < instructions.length; i++) {
		if (instructions.charAt(i) === '(') {
			currentFloor++;
		} else {
			currentFloor--;
		}
	}
	return currentFloor;
};

var basement = function(instructions) {
	var currentFloor = 0;
	var basementStep = 0;
	for (var i = 0; i < instructions.length; i++) {
		basementStep++;
		if (instructions.charAt(i) === '(') {
			currentFloor++;
		} else {
			currentFloor--;
		}

		if(currentFloor === -1) {
			break;
		}
	}

	return basementStep;
};

module.exports = {
	climb: climb,
	basement: basement
};