const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));            // always use toFixed() in e-commerse (it gives two decimal points)

const otherNumber = 23.96345;
// console.log(otherNumber.toPrecision(3));    // between 1 and 21 (it gives round off value)

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));




// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4));      // absolute value (always positive)

console.log(Math.round(3.6));   // it gives round off value (normal);
console.log(Math.ceil(3.3));   // it gives round off value (always upper value);
console.log(Math.floor(3.8));   // it gives round off value (always lower value);


console.log(Math.sqrt(25));     //it gives square root
console.log(Math.min(3, 4, 2, 5, 7,  8));       // minimum value
console.log(Math.max(3, 4, 2, 5, 7,  8));       // maximum value;

console.log("\n \nMath Random Starts Here \n \n ");

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);         // fprmula for number between this;