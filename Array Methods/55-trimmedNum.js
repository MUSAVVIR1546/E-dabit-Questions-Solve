// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

// Examples
// trimmedAverages([4, 5, 7, 100]) ➞ 6
// // Average of 5 and 7

// trimmedAverages([10, 25, 5, 15, 20]) ➞ 15
// // Average of 10, 15 and 20

// trimmedAverages([1, 1, 1]) ➞ 1
// // 1
// Notes
// Round to the nearest whole number.
// Array size is greater than 2.

function trimmedAverages(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        if (arr[i] !== max && arr[i] !== min) {
            sum += arr[i];
            count++;
        }

    }

    let average = Math.round(sum / count);
    return average



}
console.log(trimmedAverages([4, 5, 7, 100]));
console.log(trimmedAverages([10, 25, 5, 15, 20]));
console.log(trimmedAverages([1, 1, 1]));