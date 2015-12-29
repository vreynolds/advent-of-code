var surfaceArea = function(dims) {
	var dimensions = dims.split('x');
	var l = parseInt(dimensions[0]);
	var w = parseInt(dimensions[1]);
	var h = parseInt(dimensions[2]);

	var surfaceArea = 2 * l * w + 2 * l * h + 2 * w * h;

	return surfaceArea;
};

var smallestSideArea = function(dims) {
	var dimensions = dims.split('x');
	var l = parseInt(dimensions[0]);
	var w = parseInt(dimensions[1]);
	var h = parseInt(dimensions[2]);

	var area1 = l * w;
	var area2 = l * h;
	var area3 = w * h;

	var smallestSideArea = area1;
	if (smallestSideArea > area2) {
		smallestSideArea = area2;
	}
	if (smallestSideArea > area3) {
		smallestSideArea = area3;
	}

	return smallestSideArea;
};

var wrap = function(dims) {
	return surfaceArea(dims) + smallestSideArea(dims);
};

var ribbon = function(dims) {
	var dimensions = dims.split('x');
	var l = parseInt(dimensions[0]);
	var w = parseInt(dimensions[1]);
	var h = parseInt(dimensions[2]);

	var perimeter1 = 2 * (l + w);
	var perimeter2 = 2 * (l + h);
	var perimeter3 = 2 * (w + h);

	var smallestPerimeter = perimeter1;
	if (smallestPerimeter > perimeter2) {
		smallestPerimeter = perimeter2;
	}
	if (smallestPerimeter > perimeter3) {
		smallestPerimeter = perimeter3;
	}

	return smallestPerimeter;
};

var bow = function(dims) {
	var dimensions = dims.split('x');
	var l = parseInt(dimensions[0]);
	var w = parseInt(dimensions[1]);
	var h = parseInt(dimensions[2]);
	var volume = l * w * h;

	return volume;
};

var totalRibbon = function(dims) {
	return ribbon(dims) + bow(dims);
};

module.exports = {
	surfaceArea: surfaceArea,
	smallestSideArea: smallestSideArea,
	wrap: wrap,
	ribbon: ribbon,
	bow: bow,
	totalRibbon: totalRibbon
};