// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

// Examples
// outlierNumber([2, 3, 4]) ➞ 3
// // 2 and 4 are even numbers.
// // 3 is an outlier number.

// outlierNumber([1, 2, 3]) ➞ 2

// outlierNumber([4, 1, 3, 5, 9]) ➞ 4
// Notes
// Array size will always be >= 3.

function outlierNumber(arr) {
    let outlier = 0
    if (arr.reduce((acc, a) => acc + a, 0) % 2 !== 0) {
        arr.forEach(element => {
            if (element % 2 !== 0)
                outlier = element
        });
    } else {
        arr.forEach(element => {
            if (element % 2 === 0)
                outlier = element
        });
    }
    return outlier
}
console.log(outlierNumber([2, 3, 4]));
console.log(outlierNumber([4, 1, 3, 5, 9]));