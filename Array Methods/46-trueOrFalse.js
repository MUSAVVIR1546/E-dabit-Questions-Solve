// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]

// integerBoolean("10") ➞ [true, false]

// integerBoolean("001") ➞ [false, false, true]
// Notes
// Expect numbers with 0 and 1 only.

//1
// function integerBoolean(n) {
// let arr = [];
// for (let i = 0; i < n.length; i++) {
// arr.push(n[i] === '1');
// }
// return arr;
// 
// }
// console.log(integerBoolean("100101"));
// console.log(integerBoolean("001"));
// console.log(integerBoolean("10"));

//2
// function trueOrFalse(num) {
//     return num.split('').map((n) => n === '1');
// }
// console.log(trueOrFalse("100101"));
// console.log(trueOrFalse("001"));
// console.log(trueOrFalse("10"));

//3
function trueOrFalse(digit) {
    return digit.split('').map(n => n === '1' ? true : false)
}

console.log(trueOrFalse("100101"));
console.log(trueOrFalse("001"));
console.log(trueOrFalse("10"));