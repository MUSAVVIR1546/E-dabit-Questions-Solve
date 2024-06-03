// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

const arr = [1, 2, 3, 4, 5, 6]
let [a,b] = arr;

console.log(a) // outputs 1
console.log(b) // outputs 2

//What is Array Destructurig method in ECMA6.
// ES6 (ECMAScript 2015) mein ek naya feature aaya hai jise array destructuring kehte hain. Ye ek tareeka hai jisse array se values ko nikal kar unhe variables mein assign kiya ja sakta hai. Isse code likhne mein aur samajhne mein asaan ho jata hai. Niche ek basic example hai jisse aapko samajh aayega ki ye kis tarah kaam karta hai:

// Maan lijiye aapke paas ek array hai:

// const numbers = [1, 2, 3, 4, 5];
// Array destructuring ka use karke aap iss array se values ko nikal kar variables mein assign kar sakte hain:

// const [a, b, c, d, e] = numbers;
// Is line ke baad, a ko 1 assign kiya jayega, b ko 2, c ko 3, aur aise hi aage. Ye ek convenient tareeka hai array ke saath kaam karne ka, khaas kar jab aap specific elements ko index ke zariye access karna nahi chahte.

// Agar aap kisi element ko ignore karna chahte hain, to aap usse direct skip kar sakte hain:

// const [first, , third] = numbers;
// Yahan, sirf array ke pehle aur teesre position ke values ko extract kiya gaya hai, aur doosre value ko ignore kiya gaya hai.

// Array destructuring commonly functions mein use hota hai, jisse aap functions se return hui values ko seedhe variables mein assign kar sakte hain:

// function getNumbers() {
//   return [1, 2, 3];
// }

// const [x, y, z] = getNumbers();
// Is tareeke se aap getNumbers function se return hui values ko seedhe x, y, aur z variables mein assign kar sakte hain. Array destructuring JavaScript mein arrays ke saath kaam karte waqt code likhne ko concise aur express karne mein madad karta hai.