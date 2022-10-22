/* 
 * An arrow function that adds numbers and returns the sum.
 * @argument {...number|Array} numbers - Accepts multiple numeric values or numeric arrays.
 * @returns {number} sum represents the sum of the numbers.
 */
const add = (...numbers) => {
  // Stores the result of the calculations.
  let sum = 0;
  // Add all arguments to a one-dimensional array.
  numbers = numbers.flat();
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
 * @argument {...number|Array} numbers - Accepts multiple numeric values or numeric arrays.
 * @returns {number} difference represents the difference of the numbers.
 */
const subtract = (...numbers) => {
	// Stores the result of the calculations.
  let difference;
  // Add all arguments to a one-dimensional array.
  numbers = numbers.flat();
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

/* 
 * An arrow function adds numbers and returns the sum.
 * @argument {...number|Array} numbers - Accepts multiple numeric values or numeric arrays.
 * @returns {number} sum represents the sum of the numbers.
 */
const sum = (...numbers) => {
  return add(numbers);
};

/* 
 * An arrow function that multiplies an array of numbers and returns the product.
 * @argument {...number|Array} numbers - Accepts multiple numeric values or numeric arrays.
 * @returns {number} product represents the product of the calculation.
 */
const multiply = (...numbers) => {
  // Stores the result of the calculations.
  let product;
  // Add all arguments to a one-dimensional array.
  numbers = numbers.flat();
  // Iterate through the given numbers.
  for (const num of numbers) {
    // Validate given input as a number. If NaN, return NaN.
    if (isNaN(num)) {return NaN};
    // If this is the first calculation, store num in `product`.
    if (typeof product === 'undefined') {product = num}
      // Otherwise, perform multiplication on `product`.
      else {product *= num};
    };
    // Return the final product.
    return product;
};

const power = () => {
	
};

const factorial = () => {
	
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
 * 1. Non-numerical inputs are not accepted. Arrays of numbers are OK.
 * 2. Addition always starts from zero.
 * 
 * (subtract)
 * 1. A minimum of two numbers must be provided. Arrays of numbers are OK.
 * 2. Non-numerical inputs are not accepted.
 * 3. Subtraction always starts from the value of the first given
 * number. The second given number reduces the value of the first.
 * 4. If there are more than two given numbers, each additional number
 * reduces the value of the previous calculation.
 * 
 * (multiply)
 * 1. A minimum of two numbers must be provided. Arrays of numbers are OK.
 * 2. Non-numerical inputs are not accepted.
 * 3. Multiplication always starts from the value of the first given
 * number, multiplied by the value of the second number.
 * 4. If there are more than two given numbers, each additional number
 * multiplies the value of the previous calculation.
 * 
 * (sum)
 * 1. Non-numerical inputs are not accepted. Arrays of numbers are OK.
 * 2. Addition always starts from zero.
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
 * (multiply)
 * - Validate the given values as numbers.
 * - Multiply the values by one-another.
 * - Output the result.
 * 
 * (sum)
 * - Validate the given values as numbers.
 * - Add the values together.
 * - Output the result.
 * 
 * ALGORITHM:
 * (add)
 * - Create a variable named sum with a default value of 0.
 * - Flatten the arguments to a one-dimensional array.
 * - Iterate through the given arguments.
 *    - Validate given value as a number. Return NaN if not a number.
 *    - Add this value to the current sum.
 * - Return the result.
 * 
 * (subtract)
 * - Create a variable named difference with no default value.
 * - Flatten the arguments to a one-dimensional array.
 * - Iterate through the given arguments.
 *    - Validate given value as a number. Return NaN if not a number.
 *    - If first iteration, assign this value to `difference`
 *    - Otherwise, reduce `difference` by this value.
 * - Return `difference`.
 * 
 * (multiply)
 * - Create a variable named product with no default value.
 * - Flatten the arguments to a one-dimensional array.
 * - Iterate through the given arguments.
 *    - Validate given value as a number. Return NaN if not a number.
 *    - If first iteration, assign this value to `product`.
 *    - Otherwise, multiply `product`by this value.
 * - Return `product`.
 * 
 * (add)
 * - Create a variable named sum with a default value of 0.
 * - Flatten the arguments to a one-dimensional array.
 * - Iterate through the given arguments.
 *    - Validate given value as a number. Return NaN if not a number.
 *    - Add this value to the current `sum`.
 * - Return `sum`.
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
