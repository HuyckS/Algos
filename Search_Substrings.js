// Substring Search
// Looking for substrings within a larger string -- the very basic version

function subStringSearch(string, substring) {
    // creat a counter variable
    let count = 0;
    // loop over the longer string
    for (let i = 0; i < string.length; i++) {
        // loop over the substring
        for (let j = 0; j < substring.length; j++) {
            // if they don't match -- break out of this loop
            // this is set up to look ahead at each letter following the current i letter
            if (substring[j] !== string[i + j]) {
                break;
            }
            // if they match and the value of j has reached the length of the substring
            // increment counter variable by 1
            if (j === substring.length - 1) {
                count++;
            }
        }
    }
    // return counter
    return count;
}

console.log(subStringSearch("Success is not final, failure is not fatal: it is the courage to continue that counts.", "is"));
// Answer: 3