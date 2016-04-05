var _ = require('underscore');
var s = require('underscore.string');

var getCombinations = function(input, liters, minimizeContainers) {
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

    var combinations = getPossibleCombinations(containers, liters);

    if (minimizeContainers) {
        var sortedCombinations = _.sortBy(combinations, function(combination) {
            return combination.length;
        });

        var minimumContainers = sortedCombinations[0].length;
        var minimumCombinations = _.filter(combinations, function(combination) {
            return combination.length == minimumContainers;
        });

        return minimumCombinations.length;
    }


    return combinations.length;
};

var getPossibleCombinations = function(remainingContainers, remainingLiters) {
    var combinations = [];

    for (var index = 0; index < remainingContainers.length; index++) {
        var possibleContainer = remainingContainers[index];
        var remainingContainersCopy = remainingContainers.slice(index + 1);

        if (possibleContainer == remainingLiters) {
            combinations.push([possibleContainer]);
        } else if (possibleContainer < remainingLiters) {
            var possibleCombinations = getPossibleCombinations(remainingContainersCopy, remainingLiters - possibleContainer);
            for (var comboIndex = 0; comboIndex < possibleCombinations.length; comboIndex++) {
                var possibleCombination = possibleCombinations[comboIndex];
                var combination = [possibleContainer];
                combinations.push(combination.concat(possibleCombination));
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