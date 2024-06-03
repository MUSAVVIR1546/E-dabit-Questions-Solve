// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Examples
// stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]

// stringPairs("edabit") ➞ ["ed", "ab", "it"]

// Notes
// Return [] if the given string is empty.

function stringPairs(str) {
    if (str.length === 0) {
        return [];
    }
    if (str.length % 2 !== 0) {
        str += "*";
    }

    let pairs = [];
    for (let i = 0; i < str.length; i += 2) {
        pairs.push(str.substring(i, i + 2))
    }
    return pairs;
}

console.log(stringPairs("mubasshir"));
console.log(stringPairs("edabit"));