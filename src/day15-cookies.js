var _ = require('underscore');
var s = require('underscore.string');

var bestScore = function(input, spoons) {
    if (input.length < 1) {
        return 0;
    }

    var ingredientInputs = s.lines(input);
    var ingredients = [];
    for (var index = 0; index < ingredientInputs.length; index++) {
        var properties = getIngredientProperties(ingredientInputs[index]);
        if (properties) {
            ingredients.push(properties);
        }
    }

    var possibleCombinations = getPossibleCombinations(ingredients, spoons);

    var scores = [];

    for (var index = 0; index < possibleCombinations.length; index++) {
        var combination = possibleCombinations[index];
        scores.push(calculateScore(combination, ingredients));
    }

    return _.max(scores);
};

var calculateScore = function(combination, ingredients) {
    var propertyScores = {
        capacity: 0,
        durability: 0,
        flavor: 0,
        texture: 0
    };

    for (var index = 0; index < combination.length; index++) {
        var name = combination[index].ingredient;
        var spoons = combination[index].spoons;

        var ingredientProperties = _.findWhere(ingredients, { name: name });
        propertyScores.capacity += ingredientProperties.capacity * spoons;
        propertyScores.durability += ingredientProperties.durability * spoons;
        propertyScores.flavor += ingredientProperties.flavor * spoons;
        propertyScores.texture += ingredientProperties.texture * spoons;
    }

    var totalScore
        = nullifyNegative(propertyScores.capacity)
        * nullifyNegative(propertyScores.durability)
        * nullifyNegative(propertyScores.flavor)
        * nullifyNegative(propertyScores.texture);

    return totalScore;
};

var nullifyNegative = function(value) {
    if (value < 0) {
        return 0;
    } else {
        return value;
    }
};

var getPossibleCombinations = function(remainingIngredients, remainingSpoons) {
    var combinations = [];

    if (remainingIngredients.length === 1) {
        var ingredient = remainingIngredients[0].name;
        var combination = [];
        combination.push({
            ingredient: ingredient,
            spoons: remainingSpoons
        });
        combinations.push(combination);
    } else {

        for (var spoonNumber = 0; spoonNumber <= remainingSpoons; spoonNumber++) {
            var ingredient = remainingIngredients[0].name;
            var combination = [];
            combination.push({
                ingredient: ingredient,
                spoons: spoonNumber
            });

            var remainingIngredientsCopy = remainingIngredients.slice(0);
            remainingIngredientsCopy.splice(0, 1);
            var remainingPossibleCombinations = getPossibleCombinations(remainingIngredientsCopy, remainingSpoons - spoonNumber);

            for (var index = 0; index < remainingPossibleCombinations.length; index++) {
                var possibleCombination = remainingPossibleCombinations[index];
                combinations.push(combination.concat(possibleCombination));
            }
        }
    }

    return combinations;
};

var getIngredientProperties = function(input) {
    var words = s.words(input);

    if (words.length < 2) {
        return null;
    }

    var name = words[0].slice(0, -1);
    var capacity = s.toNumber((words[2]).slice(0, -1));
    var durability = s.toNumber((words[4]).slice(0, -1));
    var flavor = s.toNumber((words[6]).slice(0, -1));
    var texture = s.toNumber((words[8]).slice(0, -1));

    return {
        name: name,
        capacity: capacity,
        durability: durability,
        flavor: flavor,
        texture: texture
    };
};

module.exports = {
    bestScore: bestScore
};