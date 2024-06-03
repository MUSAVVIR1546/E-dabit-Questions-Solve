// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

// function convert(minutes) {
//     return minutes*60;
// }
// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));

// const convert = (minutes) => minutes*60;
// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));


function convert(minutes) {
    if (typeof minutes !== "number") {
        return sorry;
    }

    return minutes * 60;

}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

