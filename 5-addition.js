// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

// function addition(a) {
//     return ++a;
// }
// console.log(addition(0));
// console.log(addition(9));
// console.log(addition(-3));

// const addition = (a) => ++a;
// console.log(addition(0));
// console.log(addition(9));
// console.log(addition(-3));

function addition(a) {
    let x = ++a;
    return a;
}
console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));

