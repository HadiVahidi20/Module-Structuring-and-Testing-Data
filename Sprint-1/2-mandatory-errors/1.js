// trying to create an age variable and then reassign the value by 1



const age = 33;
age = age + 1;
console.log(age);
/*the constant variable cannot be reassigned a new value
so in lin 6 we will get an error because it can not reassign the age variable with a new value of age + 1 which in this case is 34 
here is the error message we will get:/home/cyf/CYF/ITP/Module-Structuring-and-Testing-Data/Sprint-1/2-mandatory-errors/1.js:6
age = age + 1;
    ^

TypeError: Assignment to constant variable.

 to fix this error we can use let instead of const because let variable can be reassigned a new value*/

let age2 = 33;
age2 = age2 + 1;
console.log(age2);

// now it will work fine and the output will be 34 and every time we run the code it will increase by 1