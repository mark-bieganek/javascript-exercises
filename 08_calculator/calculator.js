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

/* 
 * An arrow function that performs exponentiation on a number and returns the product.
 * @argument {base} number required - Accepts a single numeric value.
 * @argument {power} number required - Accepts a single numeric value.
 * @returns {number} product represents the product of the calculation.
 */
const power = (base, power) => {
	// Stores the result of the calculations.
  let product;
  // Validate given arguments as a numbers. If NaN, return NaN.
  if (isNaN(base)) {return NaN};
  if (isNaN(power)) {return NaN};
  // A power of zero always returns 1.
  if (power === 0) {return 1};
  // If power is positive.
  for (i = 0; i < power; i++) {
    // If this is the first calculation, store num in `product`.
    if (typeof product === 'undefined') {product = base}
    // Otherwise, perform multiplication on `product`.
    else {product *= base};
  };
  // If power is positive.
  for (i = 0; i > power; i--) {
    // If this is the first calculation, store num in `product`.
    if (typeof product === 'undefined') {product = base}
    // Otherwise, perform multiplication on `product`.
    else {product /= base};
  };
  
  // Return the final product.
  return product;
};

/* 
 * An arrow function that performs factorial calculations on a number and returns the product.
 * @argument {number} number required - Accepts a single numeric value.
 * @returns {number} product represents the product of the calculation.
 */
const factorial = (number) => {
  // Validate the given number as a numerical primitive with a min value of 0.
  if (isNaN(number) || number < 0) {return};
  // Stores the product of the calculation.
  let product = 1; // default value
  // Iterate from the given number to 1.
  for (i = number; i >= 1; i--) {
    product *= i;
  }
  // Return the final product.
  return product;
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
 * (power)
 * 1. Two numbers must be provided.
 * 2. Non-numerical inputs are not accepted.
 * 3. The first given number is the base. And the second given number is
 * the power.
 * 4. The base can be positive or negative.
 * 5. The power can be positive or negative.
 * 6. A positive power tells us how many times to multiply a base number.
 * 7. A negative power tells us how many times to divide a base number.
 * 8. A power of zero will always return 1.
 * 
 * (factorial)
 * 1. A single number must be provided.
 * 2. Non-numerical input is not accepted.
 * 3. Only integers are accepted.
 * 4. Negative numbers are accepted, but will always return 'undefined'.
 * 5. Zero is accepted as an input, but will always return '1'.
 * 6. For integers greater than 1, a factorial calculation is performed.
 * 7. A Factorial calculation is defined as the product of an integer and 
 * all the integers below it; e.g. factorial four ( 4! ) is equal to 24. 
 * ie: (4 x 3 x 2 x 1) = 24
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
 * (power)
 * - Validate the given values as numbers.
 * - If the power is positive, multiply the base number by itself.
 * - If the power is negative, divide the base number by itself.
 * - Output the result.
 * 
 * (factorial)
 * - Validate the given value as numeric.
 * - Validate the given value as an integer.
 * - Validate the given value to have a minimum value of 0.
 * - Multiply the given value by the next integer below it.
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
 * (power)
 * - Create a variable named product with no default value.
 * - Check if the second given number (the power) is positive or
 * negative.
 *    - If power is positive:
 *        - Create a loop, with the initial expression = 0, the 
 *        condition expression <= `power`, and iterate by 1.
 *          - If this is the first iteration:
 *              - Set `product` equal to the value of the first given 
 *              value (the base).
 *          - Otherwise, set `product` equal to the `product` 
 *          multiplied by the value of the first given value (the base)
 *    - If power is negative:
 *        - Create a loop, with the initial expression = 0, the 
 *        condition expression >= `power`, and decrement by 1.
 *          - If this is the first iteration:
 *              - Set `product` equal to the value of the first given 
 *              value (the base).
 *          - Otherwise, set `product` equal to the `product` divided
 *          by the value of the first given value (the base).
 * - Return `product`.
 * 
 * (factorial)
 * - Create a variable named product with a default value of 1.
 *  * - Validate the given value `@number` as numeric. Return if false.
 *  * - Validate the given value `@number` as an integer. Return if false.
 * - If the given value `@number` is negative, return.
 * - If the given value `@number` is equal to 0, return 1.
 * - Create a loop, with the initial expression i = `@number`, the 
 *        condition expression i >= 1, and decrement i--.
 *          - Set `product` equal to the `product` multiplied by the current
 *          value of the iterator.
 * - Return `product`.
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
