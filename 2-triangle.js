// Write a function that takes the base and height of a triangle and return its area.

// Examples
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50


// function triangle(base, height) {
// return base * height/2;
// }
// console.log(triangle(3,2));
// console.log(triangle(7,4));
// console.log(triangle(10,10));


// function triangle(base,height){
//     var a = base*height;
//     var b = a/2;
//     return b;
// };
// console.log(triangle(10,10));
// console.log(triangle(7,4));
// console.log(triangle(3,2));

const triArea = (base, height) => (base * height) / 2;
const area = triArea(3, 2);
const area2 = triArea(7, 4);
const area3 = triArea(10, 10)
console.log(area);
console.log(area2);
console.log(area3);
