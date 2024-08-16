const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, sum) => acc + sum, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, product) => acc * product, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
