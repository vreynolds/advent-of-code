var s = require('underscore.string');

var getCombinations = function(input, liters) {
    if (liters < 1) {
        return 0;
    }
    var inputLines = s.lines(input);

    var containers = [];
    var totalContainerVolume = 0;
    for (var index = 0; index < inputLines.length; index++) {
        var containerInput = inputLines[index];
        containers.push(getContainerVolume(containerInput));
    }

    return getPossibleCombinations(containers, liters);
};

var getPossibleCombinations = function(remainingContainers, remainingLiters) {
    var combinations = 0;

    if (remainingLiters == 0) {
        combinations++;
    } else {

        for (var index = 0; index < remainingContainers.length; index++) {
            var possibleContainer = remainingContainers[index];
            var remainingContainersCopy = remainingContainers.slice(index + 1);

            if (possibleContainer <= remainingLiters) {
                var possibleCombinations = getPossibleCombinations(remainingContainersCopy, remainingLiters - possibleContainer);
                combinations += possibleCombinations;
            }
        }
    }

    return combinations;
};

var getContainerVolume = function(containerInput) {
    return s.toNumber(containerInput);
};

module.exports = {
    getCombinations: getCombinations
};