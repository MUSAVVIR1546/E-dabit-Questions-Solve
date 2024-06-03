// Write a function that returns the sum of elements greater than 5, in the given array .

// Examples
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

// sumFive([ 1, 2, 3, 4 ]) ➞ 0

// sumFive([ 10, 12, 28, 47, 55, 100 ]) ➞ 252
// Notes
// Find all the elements greater than 5, not the elements greater than or equal to 5.

//1
// function sumFive(arr) {
//     return arr.reduce((item, acc) => acc > 5 ? item + acc : item, 0);
// }

// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
// console.log(sumFive([1, 2, 3, 4]));
// console.log(sumFive([10, 12, 28, 47, 55, 100]));

//2
function totalFive(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            total += arr[i];
        }
    }
    return total;
}

console.log(totalFive([1, 5, 20, 30, 4, 9, 18]));
console.log(totalFive([1, 2, 3, 4]));
console.log(totalFive([10, 12, 28, 47, 55, 100]));