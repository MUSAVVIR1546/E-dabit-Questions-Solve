// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// Examples
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]

// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]
// Notes
// The function returns an array of strings.
// All drink names are in lowercase.

//1
// function skipTooMuchSugarDrinks(arr) {
//     let sugar = ["cola", "fanta"];
//     return arr.filter((item) => !sugar.includes(item));
// }

// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));

//2
function isExist(drink) {
    const sugar = ['fanta', 'cola'];
    return sugar.includes(drink)
}

function filterDrinks(drinks) {
    return drinks.filter(drink => !isExist(drink))
}

function skipTooMuchSugarDrinks(drinks) {
    return filterDrinks(drinks);
}

console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));