// Write a function that takes a string and returns that string in reverse order

// write function reverse with 1 parameter (a string)
function reverse(str) {
    // add check to make sure there is a string
    if (str.length === 0) {
        return "String is empty."
    }
    // if there is only one letter, no need to go through rest of function, more efficient to return str here.
    if (str.length === 1) {
        return str;
    }
    // create a variable that stores the length of the str provided
    let len = str.length;
    // define recursive function that takes in the string and a number (the length of the word)
    function recurse(string, length) {
        // base case -- when the length of the substring is 1, we can just return that letter
        if (length === 1) {
            return string;
        }
        // if it doesn't equal zero, we want to slice and concatenate the first letter on to the end of the new substring
        // save first letter
        let letter = string[0];
        // slice the new string
        let newStr = string.slice(1);
        // call recurse with updated str and len minus 1 and then concatenate the sliced letter to the back
        return recurse(newStr, length - 1) + letter;
    }
    // actually call that function and save the value in a new variable
    let result = recurse(str, len);
    // return result
    return result;
}

console.log(reverse("cool"));
console.log(reverse("I"));
console.log(reverse("Hi World!"));
console.log(reverse(""));