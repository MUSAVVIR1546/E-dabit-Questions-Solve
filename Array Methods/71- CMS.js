// 71 =>  Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

function cmsSelector(arr, str) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "W")); // ["WordPress"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")); // ["Drupal"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")); // ["Drupal", "Joomla", "Magento", "WordPress"]