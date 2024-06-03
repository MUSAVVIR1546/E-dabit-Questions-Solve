// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

// function getFirstValue(arr) {
    // return arr[0];
    // 
// }
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));


// const getFirstValue = arr => Array.isArray(arr) ? arr[0] : "error";

// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([]));
// console.log(getFirstValue("This is not an array"));

// function getFirstValue(arr) {
//     let a = arr[0];
//     return a;
    
// }

// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

// In loop

let numArray = [10,20,30,40,50];

let firstElement;

for(i=0;i<numArray.length;i++){
    firstElement=numArray[i];
    break;
}
console.log(firstElement);
