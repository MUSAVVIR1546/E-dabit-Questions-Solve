// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples
// hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) ➞ true

// hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) ➞ false

// hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) ➞ false


// function hasSameBread(sandwich1, sandwich2) {
//     return sandwich1[0] === sandwich2[0] && sandwich1[sandwich1.length - 1] === sandwich2[sandwich2.length - 1];
// }
// console.log(hasSameBread(
//     ["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]
// ));

// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]
// ));

// console.log(hasSameBread(
//     ["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]
// ));

const hasSameBread = (sandwich1, sandwich2) => {
    if (sandwich1[0] !== sandwich2[0]) {
        return false;
    }

    for (let i = 0; i < sandwich1.length; i++) {
        if (sandwich1[i] !== sandwich2[i]) {
            return true;
        }
    }

    return true;
};


console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]
));

console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]
));

console.log(hasSameBread(
    ["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]
));