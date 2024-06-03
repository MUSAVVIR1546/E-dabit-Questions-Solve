// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16

// function length(str) {
//     let count = 0;
//     while (str[count] !== undefined) {
//         count++;
//     }
//     return count;
// }

// // Test cases
// console.log(length("Hello World")); // ➞ 11
// console.log(length("Edabit")); // ➞ 6
// console.log(length("wash your hands!")); // ➞ 16

let length = (str) => {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

console.log(length("Hello World")); // ➞ 11
console.log(length("Edabit")); // ➞ 6
console.log(length("wash your hands!")); // ➞ 16