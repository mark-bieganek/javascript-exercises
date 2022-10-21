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

/* 
 * An arrow function that multiplies an array of numbers and returns the product.
 * @argument {...number|Array} numbers - Accepts multiple numeric values or numeric arrays.
 * @returns {number} product represents the product of the calculation.
 */
const multiply = function(...numbers) {
  	// Stores the result of the calculations.
    let product;
    // Iterate through the given numbers.
    for (const num of numbers) {
      // Perform multiplication.
      // If this argument is an array, iterate through it and perform calculations on each item.
      if (Array.isArray(num)) {
        for (item of num) {
          product = calculate(item);
        };
      } else {
        // Argument is not an array, perform calculation.
        product = calculate(num);
      };
    };
    // A nested named function that performs the multiplication calculation.
    function calculate(num) {
      // Validate given input as a number. If NaN, return NaN.
      if (isNaN(num)) {return NaN};
      // If this is the first calculation, store num in `product`.
      if (typeof product === 'undefined') {product = num}
        // Otherwise, perform multiplication on `product`.
        else {product *= num};
      return product;
    }
    // Return the final product.
    return product;
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
 * 3. Subtraction always starts from the value of the first given
 * number. The second given number reduces the value of the first.
 * 4. If there are more than two given numbers, each additional number
 * reduces the value of the previous calculation.
 * 
 * (multiply)
 * 1. A minimum of two numbers must be provided.
 * 2. Non-numerical inputs are not accepted.
 * 3. Multiplication always starts from the value of the first given
 * number, multiplied by the value of the second number.
 * 4. If there are more than two given numbers, each additional number
 * multiplies the value of the previous calculation.
 * 
 * OPERATIONS:
 * (add)
 * - Validate the given values as numbers.
 * - Add the values together.
 * - Output the result.
 * 
 * (subtract)
 * - Validate the given values as numbers.
 * - Subtract the values from one-another.
 * - Output the result.
 * 
 *  * (multiply)
 * - Validate the given values as numbers.
 * - Multiply the values by one-another.
 * - Output the result.
 * 
 * ALGORITHM:
 * (add)
 * - Create a variable named sum with a default value of 0.
 * - Iterate through the given arguments.
 *    - Validate given value as a number. Return NaN if not a number.
 *    - Add this value to the current sum.
 * - Return the result.
 * 
 * (subtract)
 * - Create a variable named difference with no default value.
 * - Iterate through the given arguments.
 *    - Validate given value as a number. Return NaN if not a number.
 *    - If this is the first iteration, assign this value to the
 *    difference variable.
 *    - Otherwise, reduce the difference variable by this value.
 * - Return the result.
 * 
 * (multiply)
 * - Create a variable named product with no default value.
 * - This function accepts arguments as arrays of numbers or number primitives.
 * - Create a named function calculate() with parameter `num`.
 *    - Validate `num` as a number. Set product = NaN if not a number.   
 *    - If product is still undefined, assign `num` to `product`.
 *    - Otherwise, multiply `product` by this `num`.
 *    - Return `product`.
 * - Iterate through the given arguments.
 *    - If the argument is an array, iterate through it and call `calculate(item)`
 *    with each iteration, assign the output to `product`.
 *    - If the argument is a number, call `calculate()`, and assign the output to
 *    `product`.
 * - Return the result.
 * 
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
