/* 
 * An arrow function that adds at least two numbers and returns the sum.
 * @argument {...number} numbers - A positive or negative number.
 * @returns {number} Number represents the sum of the numbers.
 */
const add = function(...numbers) {
  // Stores the result of the calculations.
  let sum = 0;
	// Iterate through the given numbers.
  for (const num of numbers) {
    // Validate given input as a number. If NaN, return NaN.
    if (isNaN(num)) {return NaN};
    // Add this number to the current sum.
    sum += num;
  };
  return sum;
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

/* 
 * Create a calculator that does the following:
 * - add
 * - subtract
 * - get the sum
 * - multiply
 * - get the power
 * - find the factorial
 * 
 * CONSTRAINTS:
 * (add)
 * 1. A minimum of two numbers must be provided.
 * 2. Non-numerical inputs are not accepted.
 * 
 * OPERATIONS:
 * (add)
 * - Validate the given values as numbers.
 * - Add the values together.
 * - Output the result.
 * 
 * ALGORITHM:
 * (add)
 * - Create a variable named sum with a default value of 0.
 * - Iterate through the given arguments.
 *    - Validate given value as a number. Return an error if not a number.
 *    - Add this value to the current sum.
 * - Return the result.
 */

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
