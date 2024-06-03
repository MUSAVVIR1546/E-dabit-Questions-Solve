// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

// Examples
// chineseZodiac(2021) ➞ "Ox"

// chineseZodiac(2020) ➞ "Rat"

// chineseZodiac(1933) ➞ "Rooster"
// Notes
// The list of animals used can vary slightly, so check the Resources tab for the list that you will need for this challenge.

//1
// function chineseZodiac(birthYear) {
// const referenceYear = 1924;
// const difference = birthYear - referenceYear;
// const position = difference % 12;
// const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
// const correctAnimal = animals[position];
// return correctAnimal;
// }

//2
// function chineseZodiac(year) {
//     const referenceYear = 1924;
//     const difference = year - referenceYear;
//     const position = difference % 12;
//     let correctAnimal;
//     switch (position) {
//         case 0:
//             correctAnimal = "Rat";
//             break;
//         case 1:
//             correctAnimal = "Ox";
//             break;
//         case 2:
//             correctAnimal = "Tiger";
//             break;
//         case 3:
//             correctAnimal = "Rabbit";
//             break;
//         case 4:
//             correctAnimal = "Dragon";
//             break;
//         case 5:
//             correctAnimal = "Snake";
//             break;
//         case 6:
//             correctAnimal = "Horse";
//             break;
//         case 7:
//             correctAnimal = "Goat";
//             break;
//         case 8:
//             correctAnimal = "Monkey";
//             break;
//         case 9:
//             correctAnimal = "Rooster";
//             break;
//         case 10:
//             correctAnimal = "Dog";
//             break;
//         case 11:
//             correctAnimal = "Pig";
//             break;
//     }
//     return correctAnimal;

// }

//3
function chineseZodiac(year) {
    const referenceYear = 1924;
    const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    let index = 0;
    if (year >= referenceYear) {
        for (let i = referenceYear; i < year; i++)
            index = (index + 1) % 12;
    } else {
        for (let i = referenceYear; i > year; i--) {
            index = (index - 1) % 12 + 12;
        }
    }
    let correctAnimal = animals[index];
    return correctAnimal;
}
console.log(chineseZodiac(2021));
console.log(chineseZodiac(2020));
console.log(chineseZodiac(1933));