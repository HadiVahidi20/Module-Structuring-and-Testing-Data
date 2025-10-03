const penceString = "3679p";

const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

console.log(penceStringWithoutTrailingP);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

console.log(paddedPenceNumberString);

const pounds = paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2);

console.log(pounds);

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

console.log(pence);

console.log(`£${pounds}.${pence}`);



// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program



// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

/*1. const penceString = "399p";

We create a variable called penceString and give it the value "399p".

This is the price in pence, written as text.

2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

We remove the last letter "p" from the string.

Now we only have the numbers, for example "399".

**3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

We make sure the string has at least 3 characters by adding zeros at the start if needed.

Example: "50" becomes "050" and "5" becomes "005".

4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

We take all characters except the last two.

These characters are the pounds. Example: "399" → "3" pounds.

5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

We take the last two characters. These are the pence.

We add a zero at the end if needed to always have two digits. Example: "5" → "05".

6. console.log(£${pounds}.${pence});

We show the price in pounds and pence.

Example: "399p" → £3.99, "50p" → £0.50. */
