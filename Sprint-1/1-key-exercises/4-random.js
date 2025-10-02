const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// 

//Mach.random() - generates a random number between 0 (inclusive) and 1 (exclusive):
const num1=Math.random();
console.log(num1);

const num3=(maximum - minimum + 1);
//(maximum - minimum + 1) - calculates the range of numbers we want (in this case, 100 - 1 + 1 = 100)
//so by adding this to our random number we are scaling it to be between 0 and 100
console.log(num3);
const num2=Math.random()*(maximum - minimum + 1);
console.log(num2);
//until this point we have a random number between 0 (inclusive) and 100 (exclusive)but is can be a decimal number
// Math.floor() - rounds down to the nearest whole number, so we now have a random integer between 0 and 99

const num5 = Math.floor(Math.random() * (maximum - minimum + 1)) ;
console.log(`it suppose to be a rounded number from 0-99  ${num5}`);

//finally By adding 1, the number will be between 1 and 100, including both.

console.log(`it suppose to be a rounded number from 1-100  ${num}`);

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

