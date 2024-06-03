// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
// Notes
// The order of the array is: half, quarter, eighth.

// function halfQuarterEighth(n) {
//     const half = n / 2;
//     const quarter = n / 4;
//     const eighth = n / 8;

//     return [half, quarter, eighth];
// }

// console.log(halfQuarterEighth(6));
// console.log(halfQuarterEighth(22));
// console.log(halfQuarterEighth(25));

// const halfQuarterEighth = (n) => {
//     const half = n / 2;
//     const quarter = n / 4;
//     const eighth = n / 8;

//     return [half, quarter, eighth];
// }
// console.log(halfQuarterEighth(6));
// console.log(halfQuarterEighth(22));
// console.log(halfQuarterEighth(25));

function halfQuarterEighth(n) {
    const factors = [2, 4, 8];
    const result = [];
    for (let i = 0; i < factors.length; i++) {
        result.push(n / factors[i]);
    }
    return result;
}

console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));