// Create a function that takes two numbers as arguments and returns their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

// function sumInt(sum,sum2){
//     return sum + sum2;
// }
// console.log(sumInt(3,2));
// console.log(sumInt(-3,-6));
// console.log(sumInt(7,3));

// const addition = (sum,sum2) => sum+sum2;
// console.log(addition(3,2));
// console.log(addition(-3,-6));
// console.log(addition(7,3));

// function addition(sum, sum2) {
//     var a = sum+sum2;
//     return a;
// }
// console.log(addition(3,2));
// console.log(addition(-3,-6));
// console.log(addition(7,3));


function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Sorry but you didn't pass two numbers.";
    }
    return a + b;
}

console.log(addition(3,2));
console.log(addition(-3,-6));
console.log(addition(7,3));