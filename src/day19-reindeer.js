var _ = require('underscore');

var replace = function(replacements, molecule) {
    var possibleReplacements = [];

    var formattedReplacements = [];
    for (var i = 0; i < replacements.length; i++) {
        var replacement = replacements[i].split(' => ');
        formattedReplacements.push({
            original: replacement[0],
            replacement: replacement[1]
        });
    }

    for (var i = 0; i < molecule.length; i++) {
        var letter = molecule[i];
        var replaceableLetter = _.findWhere(formattedReplacements, {
            original: letter
        });
        if(replaceableLetter) {
            possibleReplacements.push(molecule.substr(0, i) + replaceableLetter.replacement + molecule.substr(i + 1));
        }
    }
    console.log(possibleReplacements)
    return _.uniq(possibleReplacements).length;
};

module.exports = {
    replace: replace
};