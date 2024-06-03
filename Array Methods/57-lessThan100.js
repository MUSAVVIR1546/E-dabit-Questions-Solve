// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// Examples
// arrayLessThan100([5, 57]) ➞ true

// arrayLessThan100([77, 30]) ➞ false

// arrayLessThan100([0]) ➞ true

function arrayLessThan100(arr) {
    return arr.reduce((acc, a) => a + acc, 0) < 100 ? true : false;
}
console.log(arrayLessThan100([5, 57]));
console.log(arrayLessThan100([77, 30]));
console.log(arrayLessThan100([0]));