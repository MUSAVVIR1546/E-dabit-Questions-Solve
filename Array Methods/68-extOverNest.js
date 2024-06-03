// Create a function that returns the original value from a matrix with too many sub-arrays.

// Examples
// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

// deNest([[[[[[[true]]]]]]]) ➞ true

// deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
// Notes
// You only need to retrieve one element.
function deNest(arr) {
    let ele = arr.pop();
    while (typeof ele === "object")
        ele = ele.pop()
    return ele
}
console.log(deNest([
    [
        [
            [
                [
                    [
                        [
                            [
                                [
                                    [
                                        [
                                            [3]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]));

console.log(deNest([
    [
        [
            [
                [
                    [
                        [true]
                    ]
                ]
            ]
        ]
    ]
]));

console.log(deNest([
    [
        [
            [
                [
                    [
                        [
                            [
                                [
                                    [
                                        [
                                            [
                                                [
                                                    [
                                                        [
                                                            [
                                                                ["edabit"]
                                                            ]
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]));