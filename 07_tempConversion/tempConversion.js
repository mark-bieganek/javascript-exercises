/* 
 * An arrow function that converts a given temperature in °F to °C.
 * @param {fahrenheitParam} required This parameter is always needed. Number expected.
 * @return {number} representing the result of the conversion.
 */
const ftoc = (fahrenheitParam = 0) => {
  // Validate given input as a number. Do not perform conversion if NaN.
  if (isNaN(fahrenheitParam)) {return fahrenheitParam};
  // Perform conversion on the given input with formula °C=(°F-32)/1.8.
  return (fahrenheitParam-32)/1.8;
};

/* 
 * An arrow function that converts a given temperature in °C to °F.
 * @param {fahrenheitParam} required This parameter is always needed. Number expected.
 * @return {number} representing the result of the conversion.
 */
const ctof = (celsiusParam = 0) => {
  // Validate given input as a number. Do not perform conversion if NaN.
  if (isNaN(celsiusParam)) {return celsiusParam};
  // Perform conversion on the given input with formula °F=(°C*1.8)+32.
  return (celsiusParam*1.8)+32;
};


/*
Write two functions that convert temperatures from Fahrenheit to 
Celsius, and vice versa:
```
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
```

Because we are human, we want the result temperature to be rounded to 
one decimal place: i.e., `ftoc(100)` should return `37.8` and not 
`37.77777777777778`.


CONSTRAINTS:
1. The inputs can only be numerical.
2. The outputs will only be numerical, accurate to 1 decimal place.

OPERATIONS:
1. Convert a given number representing a temperature in °F to °C.
2. Convert a given number representing a temperature in °C to °F.
3. Ensure the given value is a number.

ALGORITHM (Fahrenheit to Celsius):
1. Read a given input.
2. Validate given input as a number. Return an error if not a number.
3. Perform conversion on the given input with formula °C=(°F-32)/1.8.
4. Return the result.

ALGORITHM (Celsius to Fahrenheit):
1. Read a given input.
2. Validate given input as a number. Return an error if not a number.
3. Perform conversion on the given input with formula °F=(°C*1.8)+32.
4. Return the result.


*/

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
