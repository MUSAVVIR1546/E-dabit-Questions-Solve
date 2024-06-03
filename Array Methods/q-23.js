// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// var [head, tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4] instead of tail = 2?

// Notes
// Check the Resources tab for more examples.

//1
// const str = [head, ...tail] = [1, 2, 3, 4];

// console.log(head);
// console.log(tail);

//2
// const arr = [1, 2, 3, 4];

// const [head, ...tail] = arr;

// function sliceArray(arr, n) {
//     return arr.slice(n);
// }

// const newTail = sliceArray(tail, 1);

// console.log(head); // outputs 1
// console.log(newTail); // outputs [2, 3, 4]

//3
const arr = [1, 2, 3, 4];

const [head, ...tail] = arr;

const newTail = [...tail];

console.log(head); // outputs 1
console.log(newTail); // outputs [2, 3, 4]