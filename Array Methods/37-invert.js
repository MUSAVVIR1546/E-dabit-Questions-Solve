// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

// invertArray([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// function invertArray(arr) {
//     return arr.map(item => item * -1)
// }

// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([-1, 2, -3, 4, -5]));


//1
function invertArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] *= -1
    }
}


console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([-1, 2, -3, 4, -5]));


//2
// function invertArray(arr) {
//     return arr.map((x) => x * -1);
// }

// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([-1, 2, -3, 4, -5]));