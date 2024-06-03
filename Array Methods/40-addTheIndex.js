// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Examples
// addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]

// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]

// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]
// Notes
// You'll only get numbers in the array.


//1
// function addIndexes(arr) {
//     let i = 0
//     let result = [];
//     while (i < arr.length) {
//         result.push(arr[i] + i)
//         i++;
//     }
//     return result
// }
// console.log(addIndexes([0, 0, 0, 0, 0]));
// console.log(addIndexes([1, 2, 3, 4, 5]));
// console.log(addIndexes([5, 4, 3, 2, 1]));

//2
// function incIndex(arr) {
// let total = [];
// for (let i = 0; i < arr.length; i++) {
// total.push(arr[i] + i)
// }
// return total;
// }
// 
// console.log(incIndex([0, 0, 0, 0, 0]));
// console.log(incIndex([1, 2, 3, 4, 5]));
// console.log(incIndex([5, 4, 3, 2, 1]));

//3
// arr.map((eachElement, index) => {
// let newNumber = eachElement + index;
// return newNumber
// });

function plusIndexes(arr) {
    // return arr.map((curr, ind) => curr + ind);
    let newNumber = [];
    arr.map((curr, ind) => {
        newNumber.push(curr + ind);
    })
    return newNumber;
}
console.log(plusIndexes([0, 0, 0, 0, 0]));
console.log(plusIndexes([1, 2, 3, 4, 5]));
console.log(plusIndexes([5, 4, 3, 2, 1]));