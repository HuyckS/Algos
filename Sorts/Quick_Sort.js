// Quick Sort

// Similar to merge sort -- will use the fact that arrays of 0 and 1 element are sorted
// Select 1 element that is the "pivot" point and moves all other elements to the left or to the right based
// on if they are less than or greater than that "pivot" point
// Once this is done, you know that element is sorted correctly
// Keep picking new pivot points for the left and right of the now sorted point
// use recursion

// create a helper function to determine pivot points
// parameters: an array, a starting point with a 0 default and an end point with a default of the array length - 1
function pivot(arr, start = 0, end = arr.length - 1) {
    // function for swap brought in -- can also just swap where function is used
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    // create a variable to track pivot point and set it to the value at the start index
    let pivot = arr[start];
    // We will be returning an index, define a variable with start 
    let indexToSwap = start;
    // loop through arr with the start set to one more than the start and go to the end
    for (let i = start + 1; i <= end; i++) {
        // if the value we are trying to sort is greater than the compared value
        if (pivot > arr[i]) {
            // add one to our swap index number
            indexToSwap++;
            // swap with the pivot
            swap(arr, indexToSwap, i);
        }
    }
    //
    swap(arr, start, indexToSwap);

    return indexToSwap;
}

// console.log(pivot([3, 2, 4, 5, 1]))

// declare function with the parameters: array, a left value, and right value 
// right and left are pointer values to help track each branch that we sort
function quickSort(arr, left = 0, right = arr.length - 1) {
    // base case -- when the pointers cross, we want it to stop
    if (left < right) {
        // set variable to store pivot index and call pivot on the arr
        let pivotIndex = pivot(arr, left, right);
        // now that we have the pivot index, call quickSort twice (once for left and once for right of pivotIndex)
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    // return the sorted array
    return arr;
}

console.log(quickSort([3, 2, 5, 7, 9, 1, 0]));