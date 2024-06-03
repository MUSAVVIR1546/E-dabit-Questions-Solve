// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400

// function convert(hours) {
    // return hours*60*60;
// }
// console.log(convert(2));
// console.log(convert(10));
// console.log(convert(24));

// const convert = (hours) => hours*60*60;
// console.log(convert(2));
// console.log(convert(10));
// console.log(convert(24));

function howManySeconds(hours) {
    var a = hours*60*60;
    return a;
}
console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));