function num(arr1) {
    return arr1.every(element => (element) < 40);
}

const array1 = [1, 30, 39, 29, 10, 13];
console.log(num(array1));