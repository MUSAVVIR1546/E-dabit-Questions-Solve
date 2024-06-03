// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// sumArray([1, 2, 3, 4, 5]) ➞ 15
// sumArray([-1, 0, 1]) ➞ 0
// sumArray([0, 4, 8, 12]) ➞ 24

// function sumArray(arr) {
//     sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];// sum = sum + arr[i]
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));   // Output: 15
console.log(sumArray([-1, 0, 1]));         // Output: 0
console.log(sumArray([0, 4, 8, 12]));       // Output: 24
