/* 
 * An arrow function that adds at least two numbers and returns the sum.
 * @argument {...number} numbers - A positive or negative number.
 * @returns {number} sum represents the sum of the numbers.
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

/* 
 * An arrow function that subtracts at least two numbers and returns the difference.
 * @argument {...number} numbers - A positive or negative number.
 * @returns {number} difference represents the difference of the numbers.
 */
const subtract = function(...numbers) {
	// Stores the result of the calculations.
  let difference;
	// Iterate through the given numbers.
  for (const num of numbers) {
    // Validate given input as a number. If NaN, return NaN.
    if (isNaN(num)) {return NaN};
    // If this is the first iteration, store num in `difference`.
    if (typeof difference === 'undefined') {difference = num}
      // Otherwise, perform subtraction on the current result.
      else {difference -= num};
  };
  return difference;
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
 * 3. Addition always starts from zero.
 * 
 * (subtract)
 * 1. A minimum of two numbers must be provided.
 * 2. Non-numerical inputs are not accepted.
 * 3. Subtraction always starts from the value of the first given number.
 * 
 * OPERATIONS:
 * (add)
 * - Validate the given values as numbers.
 * - Add the values together.
 * - Output the result.
 * 
 * (subtract)
 * - Validate the given values as numbers.
 * - subtract the values from one-another.
 * - Output the result.
 * 
 * ALGORITHM:
 * (add)
 * - Create a variable named sum with a default value of 0.
 * - Iterate through the given arguments.
 *    - Validate given value as a number. Return an error if not a number.
 *    - Add this value to the current sum.
 * - Return the result.
 * 
 * (subtract)
 * - Create a variable named difference with no default value.
 * - Iterate through the given arguments.
 *    - Validate given value as a number. Return an error if not a number.
 *    - If this is the first iteration, assign this value to the
 *    difference variable.
 *    - Otherwise, reduce the difference variable by this value.
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
