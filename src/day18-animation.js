var _ = require('underscore');
var s = require('underscore.string');

var isOn = function(light) {
    return light === '#';
}

var defaultArray = function(length, defaultValue) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array.push(defaultValue);
    }

    return array;
};

var defaultGrid = function(length, defaultValue) {
    var grid = [];
    for (var i = 0; i < length; i++) {
        var array = defaultArray(length, defaultValue);
        grid.push(array);
    }

    return grid;
};

var countLights = function(grid) {
    var lightsOn = 0;
    for (var r = 0; r < grid.length; r++) {
        var row = grid[r];
        for (var c = 0; c < row.length; c++) {
            var light = row[c];
            if (light) {
                lightsOn++;
            }
        }
    }

    return lightsOn;
};

var translateToGrid = function(rows) {
    var grid = defaultGrid(rows.length, false);

    for (var r = 0; r < rows.length; r++) {
        var row = rows[r]
        for (var c = 0; c < row.length; c++) {
            var light = row[c];
            if (isOn(light)) {
                grid[r][c] = true;
            }
        }
    }

    return grid;
};

var floor = function(value, floor) {
    if (value < floor) {
        return floor;
    } else {
        return value;
    }
};

var ceiling = function(value, ceiling) {
    if (value > ceiling) {
        return ceiling;
    } else {
        return value;
    }
};

var getNeighborCoordinates = function(startPoint, limit) {
    var start = startPoint - 1;
    var end = startPoint + 2;
    start = floor(start, 0);
    end = ceiling(end, limit);

    return {
        start: start,
        end: end
    }
};

var getNeighbors = function(row, col, size) {
    var rowCoords = getNeighborCoordinates(row, size);
    var colCoords = getNeighborCoordinates(col, size);

    return {
        row: rowCoords,
        col: colCoords
    }
};

var countNeighborLights = function(row, col, size, grid) {
    var neighborsLights = 0;
    var neighbors = getNeighbors(row, col, size);

    for (var i = neighbors.row.start; i < neighbors.row.end; i++) {
        for (var j = neighbors.col.start; j < neighbors.col.end; j++) {
            if (!(i === row && j === col) && grid[i][j]) {
                neighborsLights++;
            }
        }
    }

    return neighborsLights;
};

var isCorner = function(row, col, size) {
    return (row === 0 && col === 0)
        || (row === 0 && col === size - 1)
        || (row === size - 1 && col === 0)
        || (row === size - 1 && col === size - 1);
};

var animate = function(grid, size, stuckCorners) {
    var newGrid = defaultGrid(size, false);

    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid.length; c++) {
            var neighborLights = countNeighborLights(r, c, size, grid);
            var light = grid[r][c];
            if ((light && (neighborLights === 2 || neighborLights === 3)) || (!light && neighborLights === 3)) {
                newGrid[r][c] = true;
            }
            if (stuckCorners && isCorner(r, c, size)) {
                newGrid[r][c] = true;
            }
        }
    }

    return newGrid;
};

var light = function(input, steps, stuckCorners) {
    var rows = s.lines(input);
    if (rows.length < 2) {
        return 0;
    }
    var size = rows.length;
    var grid = translateToGrid(rows);

    for (var step = 0; step < steps; step++) {
        grid = animate(grid, size, stuckCorners);
    }

    return countLights(grid);
};

module.exports = {
    light: light
};