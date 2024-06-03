// Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

// Examples
// evenLast([2, 3, 4, 5]) ➞ 30
// // numbers at even index = 2, 4
// // number at last index = 5
// // 2*5 + 4*5 = 10 + 20 = 30

// evenLast([1, 3, 3, 1, 10]) ➞ 140

// evenLast([]) ➞ 0

function evenLast(arr) {
    // let result = 0;
    // for (let i = 0; i < arr.length; i++) {
    // let lastNum = arr[arr.length - 1];
    // if (i % 2 === 0) {
    // result += arr[i] * lastNum
    // }
    // }
    // return result;
    if (arr.length === 0) return 0;

    let lastNum = arr[arr.length - 1];

    return arr.reduce((accumulator, currentValue, index) => {
        if (index % 2 === 0) {
            return accumulator + currentValue * lastNum
        }
        return accumulator;
    }, 0)

}
console.log(evenLast([2, 3, 4, 5]));
console.log(evenLast([1, 3, 3, 1, 10])) //➞ 140
console.log(evenLast([])) //➞ 0