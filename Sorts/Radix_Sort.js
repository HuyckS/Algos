// Radix Sort
// For integers -- it will look at each digit in a number
// starting at the farthest right (the one's place) moving left and group the
// integers in "buckets" to sort.

// Build a helper function to find the digit place and a function to get the digit count
// and a function to find the most digits
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    // determine the largest number of digits out of the numbers provided
    let maxDigits = mostDigits(nums);
    // loop up the largest number of digits
    for (let i = 0; i < maxDigits; i++) {
        // create a "bucket" for each digit (0 to 9)
        let buckets = Array.from({ length: 10 }, () => []);
        // loop through numbers
        for (let j = 0; j < nums.length; j++) {
            // place each corresponding number in the bucket based off of the current digit being looked at
            // the value at buckets with the index of the digit will have the number pushed into it
            buckets[getDigit(nums[j], i)].push(nums[j]);
        }
        // replace array with new line-up of values int the buckets
        // setting nums to empty array and concating the values using the spread operator of buckets
        nums = [].concat(...buckets);
    }
    // return sorted array
    return nums;
}

console.log(radixSort([23, 43523, 354, 24, 2]));