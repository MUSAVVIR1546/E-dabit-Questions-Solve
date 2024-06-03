// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"



// function evenOrOdd(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0) % 2 !== 0 ? "odd" : "even"
// }

function evenOrOdd(arr) {
    if (arr.length === 0) {
        return "even"
    }
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    if (sum % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }

}


console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));