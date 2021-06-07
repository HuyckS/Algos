// Write a recursive function that returns true if the string provided is a palindrome, otherwise return false.
// A palindrome is the same forward and backward i.e. racecar

//write a function called isPalindrome that takes in one parameter (a string)
function isPalindrome(str) {
    // create variable for length
    let len = str.length;
    // check if the string is empty
    if (len === 0) {
        return "This is an empty string."
    }
    // check if there is inly 1 letter
    if (len === 1) {
        return "Not a palindrome, only 1 letter present."
    }
    // create recurse function that takes in 2 parameters (string, length)
    function recurse(string, length) {
        // base case -- if length is less than or equal to 1 return true
        if (length <= 1) {
            return true;
        }
        // subtract one from length
        length--;
        // compare first and last element
        if (string[0] !== string[length]) {
            return false;
        }
        // slice first and last letters and store new str
        let newStr = string.slice(1, length);
        // subtract one from length
        length--;
        // call recurse on new substring and new length
        return recurse(newStr, length);
    }
    // return recurse of str and its length
    return recurse(str, len);
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("car"));
console.log(isPalindrome("rar"));
console.log(isPalindrome("r"));
console.log(isPalindrome(""));