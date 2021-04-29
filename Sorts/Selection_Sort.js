// Selection Sort
// sorted data accumulates at the beginning of the array
// similar to bubble sort, but comparing element to rest of the 
// array and swapping element with the minimum found in the loop

function selectionSort(arr) {
    // loop through and compare element to the following items
    // in the array and find a smaller value
    for (let i = 0; i < arr.length; i++) {
        // make a variable to store minimum value
        let min = i;
        // loop for comparison (add one to the current index for comparisons)
        for (var j = i + 1; j < arr.length; j++) {
            // if found, store the new minimum index and finish loop
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // if the minimum is not your starting index, swap it with the new min
        if (min !== i) {
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([0, 2, 34, 17, 10, 22, 19]));

