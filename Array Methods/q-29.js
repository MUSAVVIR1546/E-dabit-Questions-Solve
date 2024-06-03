// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

// function getMultipliedArr(arr) {
// return arr.map(num => num * 2);
// };
// 
// console.log(getMultipliedArr([2, 5, 3]));
// console.log(getMultipliedArr([1, 86, -5]));
// console.log(getMultipliedArr([5, 382, 0]));

// function getMultipliedArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             arr[i] *= 2;
//         }
//     }
//     return arr;
// }

// console.log(getMultipliedArr([2, 5, 3]));



function getMultipliedArr(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}
console.log(getMultipliedArr([2, 5, 3]));
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0]));