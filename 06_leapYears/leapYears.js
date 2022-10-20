const leapYears = function(year) {
    // Validate the given year as a year value.
    if (typeof(year) !== 'number') {
        return false;
    } else {
        // Convert given year to an integer.
        year = toInteger(year);
    };
    // Check if it's a leap year.
    // Leap years are divisible by 4.
    // Leap years are not divisible by 100, unless divisible by 400.
    // Perform these division operations, and determine if there are remainders.
    const divisibleBy4 = isDivisible(4, year);
    const divisibleBy100 = isDivisible(100, year);
    const divisibleBy400 = isDivisible(400, year);
    // Validate if it's a leap year.
    const result = divisibleBy4 && (!divisibleBy100 || (divisibleBy100 && divisibleBy400));
    // Output the result.
    return result;
}

const toInteger = function(input) {
    // Convert input to integer. If input is NaN, set assign 0.
    const result = isNaN(input) ? 0 : Math.floor(input);
    // Return the result.
    return result;
}

const isDivisible = function(byNumber = 0, input = 0) {
    // Divides an input number by another number.
    // If no remainder, the function returns true
    return !(input % byNumber);
}

/* 
Create a function that determines whether or not a given year is a 
leap year. Leap years are determined by the following rules:

CONSTRAINTS:
* Leap years:
    * are divisible by four (ie: 1984, 2004) with no remainder.
    * are not divisible by 100 (ie: 1800, 1900) with no remainder.
        * unless they are divisible by 400 (ie: 1600, 2000) with no
        remainder.

ALGORITHM:
* Create a way to record the result.
* Convert the given year to an integer.
* Performing the following math operations on the year value will
determine if it's a leap year.
    * If there's a remainder of 0 when dividing the year by 4
    * If there's a remainder greater than 0 when dividing by 100
        * And there's a remainder of 0 with dividing by 400 
* Announce the result.

PROGRAM:
# Build a re-usable function to convert inputs to integers.
    #Initialize a constant named toInteger with a function expression
        that has 1 parameter, `input` with a default value 0.
        # Within toInteger():
            # Convert the input to an integer.
                # Initialize a numeric variable named result and use a 
                ternary expression to check if input is a number
                    # If not a number, assign 0.
                    # If is a number, assign value using
                    Math.floor(input).
            # Return the result.
# Build a re-usable function to answer if dividing two numbers returns
a remainder.
    #Initialize a constant named isDivisible with a function expression
        that has 2 parameters, `byNumber`, and `input` with defaults 0.
        # Within isDivisible():
            # Perform division on the two numbers, return if there is a
            remainder. Expected output true or false.
# Build a function that takes 1 integer and returns true if it's a
leap year:
    # Initialize a constant named leapYears with a function expression 
    that accepts an integer (year) argument from the user.
    # Within leapYears()...
        # Create a numeric variable named `remainder` with no initial 
        value.
        # Validate the provided argument.
            # If not a numeric data type, return `ERROR`.
        # Perform toInteger(argument) on the provided argument.
        # Validate the argument as a leap year.
            # Sum the output of these math operations and store the
            the result in variable, `remainder`.
                # Divide the argument by 4, output the remainder.
                # Divide the argument by 100, output the remainder.
                # Divide the argument by 400, output the remainder.
    # Return result.
        # Return true if remainder equals zero.
        # Return false if remainder equals anything else.


EXPECTED OUTPUT:
```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```
*/

// Do not edit below this line
module.exports = leapYears;