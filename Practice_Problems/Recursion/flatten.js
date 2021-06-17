// Write a function that accepts an array of arrays that returns a new array with all of the values flattened. (Move all array elements in each array to one single array)

// Write a function called flatten that takes 1 parameter (an array)
function flatten(arr) {
    // create variable for length
    let len = arr.length;
    // check to see if the array is empty
    if (len === 0) {
        return arr;
    }
    // create a variable with an empty array to store all values in the arrays
    let resultArray = [];
    // loop through given array
    for (let i = 0; i < len; i++) {
        // if type of element is an array, add the result of calling flatten on the inner array to your result array
        if (Array.isArray(arr[i])) {
            resultArray = resultArray.concat(flatten(arr[i]));
        } else {
            // if it is not an array, simply push it onto the result array
            resultArray.push(arr[i]);
        }
    }
    // return new array
    return resultArray;
}

console.log(flatten([1, 2, [1, []]]));
console.log(flatten([1, 2, [1, [45, 56, 70]]]));
console.log(flatten([[3, [1], [2]], 4]));
console.log(flatten([]));