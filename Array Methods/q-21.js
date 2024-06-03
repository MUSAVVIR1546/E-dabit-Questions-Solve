// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes( ["214", true, false, 2, 2.15, [], null] )
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes( [21.1, "float", "array", ["I am array"], null, true, 214] )
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// Notes
// Check the Resources tab for help if needed.
// Remember Arrays & Null in JS are treated as object, hence the examples


// function arrayValuesTypes(arr) {
//     return arr.map(element => {
//         const type = typeof element;
//         if (type === "object") {

//             if (Array.isArray(element)) {
//                 return "object";
//             } else if (element === "null") {
//                 return "array";
//             }
//         }
//         return type;
//     });
// }

// console.log(arrayValuesTypes([1, 2, "null", []]));
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
// console.log([21.1, "float", "array", ["I am array"], null, true, 214]);




function arrayValuesTypes(arr) {

    const result = [];


    for (var i = 0; i < arr.length; i++) {

        const type = typeof arr[i];


        if (type === "object") {

            if (Array.isArray(arr[i])) {
                result.push("array");
            } else if (arr[i] === null) {
                result.push("object");
            }
        } else {
            result.push(type);
        }
    }

    return result;
}

console.log(arrayValuesTypes([1, 2, "null", []])); // ["number", "number", "string", "object"]
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])); // ["string", "boolean", "boolean", "number", "number", "object", "object"]
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])); // ["number", "string", "string", "object", "object", "boolean", "number"]