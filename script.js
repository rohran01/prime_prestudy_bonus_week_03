function numberOne(x) {
	return (x * 2);
};

function numberTwo(x) {
	if(x%2 === 0) {
		return (x / 2);
	} else {
		return ((x + 1) / 2);
	};
};

function numberThree(x) {
	return (x * 3);
};

var solution = numberThree(numberTwo(numberOne(2)));
debug(solution);