// Create a function that returns an array of all the integers between two given numbers start and end.

// Examples
// rangeOfNum(2, 4) ➞ [3]

// rangeOfNum(5, 9) ➞ [6, 7, 8]

// rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]
// Notes
// start will always be <= end.
// start and end are NOT included in the final array.
// If start == end, return an empty array.


//1
// function rangeOfNum(start, end) {
// let result = [];
// for (let i = start + 1; i < end; i++) {
// result.push(i);
// }
// return result;
// }
// 
// console.log(rangeOfNum(2, 4));
// console.log(rangeOfNum(5, 9));
// console.log(rangeOfNum(2, 11));

//2
function rangeOfNum(start, end) {
    const allNumbers = Array.from({ length: end - start + 1 }, (_, index) => start + index);

    return allNumbers.filter(num => num > start && num < end);
}


// console.log(rangeOfNum(2, 4));
// console.log(rangeOfNum(5, 9));
// console.log(rangeOfNum(2, 11));

// let animal = {
// jumps: null
// };
// let rabbit = {
// __proto__: animal,
// jumps: true
// };
// 
// console.log(rabbit.jumps);
// delete rabbit.jumps;
// console.log(rabbit.jumps);
// delete animal.jumps;
// console.log(rabbit.jumps);

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head

};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};
console.log(pockets.pen);
console.log(bed.glasses);