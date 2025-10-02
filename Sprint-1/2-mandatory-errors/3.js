const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(`The last 4 digits of my card number are ${last4Digits}`);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work



//it doesn't work because the slice method is used for strings and arrays but cardNumber is a number so it doesn't have the slice method.



// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// to fix this error we can convert the number to a string using the toString() method before applying the slice method