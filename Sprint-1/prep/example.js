// Your birthdate
const birthYear = 1992;
const birthMonth = 3; // March (1 = January, 2 = February, 3 = March, etc.)
const birthDay = 21;  // replace with your actual day of birth

// Current date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // getMonth() is 0-based
const currentDay = today.getDate();

// Calculate age
let age = currentYear - birthYear;

// Adjust if birthday hasn't happened yet this year
if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
  age--;
}

console.log(`You are ${age} years old.`);

