// Bubble Sort - two versions with one optimized

function bubbleSort(arr) {
    // Loop through array in reverse so we 'bubble' the larger numbers to the back of the array
    for (let i = arr.length; i > 0; i--) {
        // Loop through array twice to compare and swap our index all the way through
        for (let j = 0; j < arr.length; j++) {
            // if the value on the left is greater than on the right, swap them (large values bubble to the right)
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    //return array
    return arr;
}

// The problem above is that we go through the loops all the way each time, 
// when we really reduce the number of comparisons each time because it is 
// being sorted as we go.
function bubbleSortOptimized(arr) {
    // Loop through array in reverse so we 'bubble' the larger numbers to the back of the array
    for (let i = arr.length; i > 0; i--) {
        // Loop through array twice to compare and swap our index all the way through
        // j will be less than the index of i because at the end on the inner loop we 
        // will have successfully sorted and don't need to compare the values past the i index.
        for (let j = 0; j < i - 1; j++) {
            // if the value on the left is greater than on the right, swap them (large values bubble to the right)
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    //return array
    return arr;
}