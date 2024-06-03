// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Examples
// findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040

// findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276

// findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405

// findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412


// 1
function calculateVolum(arr) {
    // let total = 1;
    // for (let i = 0; i < arr.length; i++) {
    //     total *= arr[i];
    // }
    // return total;

    return arr.reduce((total, currentValue) => total * currentValue, 1)
}

function findDifference(a, b) {
    const volumeA = calculateVolum(a);
    const volumeB = calculateVolum(b);
    return Math.abs(volumeA - volumeB);
}

console.log(findDifference([28, 16, 29], [7, 8, 17]));

console.log(findDifference([9, 22, 18], [16, 24, 10]));

console.log(findDifference([1, 9, 25], [10, 7, 9]));

console.log(findDifference([7, 6, 16], [26, 9, 26]));

//2

// function findDifference(a, b) {
//     let volumeA = 1;
//     let volumeB = 1;

//     for (let i = 0; i < 3; i++) {
//         volumeA *= a[i];
//     }

//     for (let i = 0; i < 3; i++) {
//         volumeB *= b[i];
//     }

//     return Math.abs(volumeA - volumeB);
// }

// console.log(findDifference([28, 16, 29], [7, 8, 17]));

// console.log(findDifference([9, 22, 18], [16, 24, 10]));

// console.log(findDifference([1, 9, 25], [10, 7, 9]));

// console.log(findDifference([7, 6, 16], [26, 9, 26]));