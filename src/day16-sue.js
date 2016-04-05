var _ = require('underscore');
var s = require('underscore.string');

var whichSue = function(input, criteria) {
    var inputLines = s.lines(input);

    var sues = [];
    for (var index = 0; index < inputLines.length; index++) {
        var sueValues = inputLines[index];

        if (sueValues.length > 1) {
            sues.push(getSue(s.words(sueValues)));
        }
    }

    for (var index = 0; index < sues.length; index++) {
        var sue = sues[index];
        if (matchesCriteria(sue, criteria)) {
            return sue.name;
        }
    }

    return 0;
};

var matchesCriteria = function(sue, criteria) {
    var matching = true;
    for (var property in sue) {
        if (property !== 'name'
            && !checkCriteria(criteria[property], sue[property])) {
            matching = false;
            break;
        }
    }

    return matching;
};

var checkCriteria = function(criteria, propertyValue) {
    if (s.include(criteria, '>')) {
        var criteriaValue = s.toNumber(criteria.slice(1));
        return propertyValue > criteriaValue;
    } else if (s.include(criteria, '<')) {
        var criteriaValue = s.toNumber(criteria.slice(1));
        return propertyValue < criteriaValue;
    }
    else {
        return propertyValue == s.toNumber(criteria);
    }
};

var getSue = function(inputs) {
    var sueNumber = s.toNumber(inputs[1].slice(0, -1));
    var sue = {
        name: sueNumber
    };
    for (var index = 2; index < inputs.length; index = index + 2) {
        var propertyName = trim(inputs[index]);

        var propertyValueString = inputs[index + 1];
        if (index < inputs.length - 2) {
            propertyValueString = trim(propertyValueString);
        }
        var propertyValue = s.toNumber(propertyValueString);

        sue[propertyName] = propertyValue;
    }
    return sue;
};

var trim = function(value) {
    return value.slice(0, -1);
};

module.exports = {
    whichSue: whichSue
};