var _ = require('underscore');
var s = require('underscore.string');

var optimize = function(input) {
    var gains = 0;
    var happinessCalculations = [];
    var persons = [];

    var entries = s.lines(input);
    if (entries.length < 2) {
        return 0;
    }
    for (var index = 0; index < entries.length; index++) {
        var entry = entries[index];
        var words = s.words(entry);

        var name1 = words[0];
        var name2 = words[10].slice(0, -1);
        var gainOrLoss = words[2];
        var value = s.toNumber(words[3]);
        if (gainOrLoss === 'lose') {
            value = 0 - value;
        }

        happinessCalculations.push({
            person: name1,
            neighbor: name2,
            score: value
        });
        persons.push(name1);
    }

    persons = _.uniq(persons);
    var firstPersonArray = [persons[0]];
    persons.splice(0, 1);

    var possibleNeighborArrangements = calculateArrangements(persons);
    var possibleArrangements = [];
    for (var index = 0; index < possibleNeighborArrangements.length; index++) {
        var neighborArrangement = possibleNeighborArrangements[index];
        possibleArrangements.push(firstPersonArray.concat(neighborArrangement));
    }

    var possibleScores = [];
    for (var index = 0; index < possibleArrangements.length; index++) {
        var possibleArrangement = possibleArrangements[index];
        possibleScores.push(calculateHappinessScore(possibleArrangement, happinessCalculations));
    }

    return _.max(possibleScores);
};

var calculateArrangements = function(potentialNeighbors) {
    var arrangements = [];

    if (potentialNeighbors.length === 1) {
        arrangements.push([potentialNeighbors[0]]);
    } else {
        for (var index = 0; index < potentialNeighbors.length; index++) {
            var potentialNeighbor = potentialNeighbors[index];
            var potentialNeighborsCopy = potentialNeighbors.slice(0);
            potentialNeighborsCopy.splice(index, 1);

            var potentialArrangements = calculateArrangements(potentialNeighborsCopy);
            for (var j = 0; j < potentialArrangements.length; j++) {
                var potentialArrangement = potentialArrangements[j];
                arrangements.push([potentialNeighbor].concat(potentialArrangement));
            }
        }
    }

    return arrangements;
};

var calculateHappinessScore = function(arrangement, happinessCalculations) {
    var totalHappinessScore = 0;

    for (var index = 1; index < arrangement.length; index++) {
        var person = arrangement[index];
        var neighbor = arrangement[index - 1];
        var score1 = getHappinessScore(person, neighbor, happinessCalculations);
        var score2 = getHappinessScore(neighbor, person, happinessCalculations);

        totalHappinessScore += score1;
        totalHappinessScore += score2;
    }
    if (arrangement.length > 2) {
        var firstPerson = arrangement[0];
        var lastPerson = arrangement[arrangement.length - 1];
        var score1 = getHappinessScore(firstPerson, lastPerson, happinessCalculations);
        var score2 = getHappinessScore(lastPerson, firstPerson, happinessCalculations);
        totalHappinessScore += score1;
        totalHappinessScore += score2;
    }

    return totalHappinessScore;
};

var getHappinessScore = function(person, neighbor, happinessCalculations) {
    var scoreEntry = _.findWhere(happinessCalculations, {
        person: person,
        neighbor: neighbor
    });
    return scoreEntry.score;
};

module.exports = {
    optimize: optimize
};