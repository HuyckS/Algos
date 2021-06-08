// Write a recursive function that accepts an array and a callback that returns true if a single value in the array returns true when passed to the callback and false if none of the values return true for the callback.

// Write a function that can be used as a callback to test each value in the array
// callback will check if number is odd -- 1 parameter for number
const isOdd = function (num) {
    // if the remained of the number mod 2 does not equal zero, return true
    if (num % 2 !== 0) {
        return true;
    }
    // else return false
    return false;
}


// Write a function that takes 2 parameters (an array and a callback function)
function recurseCallback(arr, cb) {
    // store length of the arr in a variable
    let len = arr.length;
    // check length and see if it is empty
    if (len === 0) {
        return "False, empty array";
    }
    // declare recurse function that takes 3 parameters (array, callback, length)
    function recurse(array, callback, length) {
        // base case - if length equals zero, return false
        if (length === 0) {
            return false;
        }
        // decrement length
        length--;
        // set variable to invocation of callback with arr[length]
        let result = callback(arr[length]);
        // if variable equals true, return true
        if (result === true) {
            return true;
        }
        // else return call recurseCallback with array as parameter and new len as parameter
        return recurse(array, callback, length);
    }
    // actually call recurse function and return result
    return recurse(arr, cb, len);

}

console.log(isOdd(3));
console.log(isOdd(2));
console.log(recurseCallback([1, 2, 3], isOdd));
console.log(recurseCallback([2, 4, 6], isOdd));
console.log(recurseCallback([], isOdd));
