// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

// function check(arr,item) {
    // return arr.includes(item);
// }
// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));

function check(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

console.log(check([1, 2, 3, 4, 5], 3));   
console.log(check([1, 1, 2, 1, 1], 3));   
console.log(check([5, 5, 5, 6], 5));      
console.log(check([], 5));                
