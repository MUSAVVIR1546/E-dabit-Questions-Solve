// Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples
// spaceMeOut("space") ➞ "s p a c e"

// spaceMeOut("far out") ➞ "f a r   o u t"

// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"

function spaceMeOut(str) {
    return str.split("").join(" ")
}

console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));


function spaceMeOut(str) {
    let spacedString = "";
    for (let i = 0; i < str.length; i++) {
        spacedString += str[i] + " ";
    }
    return spacedString.trim();
}


console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));