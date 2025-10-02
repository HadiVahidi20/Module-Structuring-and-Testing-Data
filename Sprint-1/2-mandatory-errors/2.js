// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

//console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/*/home/cyf/CYF/ITP/Module-Structuring-and-Testing-Data/Sprint-1/2-mandatory-errors/2.js:4
console.log(`I was born in ${cityOfBirth}`);
                             ^

ReferenceError: Cannot access 'cityOfBirth' before initialization

this error is because we are trying to access the variable cityOfBirth before it is initialized and assigned a value.
 the console.log should be after the variable declaration and assignment

*/
console.log(`I was born in ${cityOfBirth}`);
