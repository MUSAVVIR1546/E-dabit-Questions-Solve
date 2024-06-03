// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples
// arraySum([1, 3, 3, 1, 10]) ➞ 105.46

// arraySum([2, 3, 4, 5]) ➞ 23.97

// arraySum([1, 31, 3, 11, 0]) ➞ 11.62
// Notes
// No empty array in Tests.
// Each array element ≥ 0.

//1
function arraySum(nums) {
    let numbers = nums.map(num => num % 2 === 0 ? num ** 2 : Math.sqrt(num));
    let sum = numbers.reduce((acc, val) => acc + val, 0);
    let roundedSum = Math.round(sum * 100) / 100;
    return roundedSum;

}

console.log(arraySum([1, 3, 3, 1, 10]));
console.log(arraySum([2, 3, 4, 5]));
console.log(arraySum([1, 31, 3, 11, 0]));