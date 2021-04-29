// Merge Sort 
// divide and conquer -- split array into smaller arrays until they have only 1 item in an array
// 1 or 0 element arrays are sorted
// merging two sorted is simple
// merge all of the arrays back together and you have the sorted array

// split -> merge -> sort

// First method -- works with 2 sorted arrays
function merge(arr1, arr2) {
    // empty array for our sort
    let results = [];
    // create a variable that points at each arr
    let i = 0;
    let j = 0;
    // while loop while each pointer is less than their arrays length
    // this should not run for empty arrays, but our following while loops 
    // catch the other array and sort it if that is the case
    while (i < arr1.length && j < arr2.length) {
        //push item that is shorter into results
        if (arr2[j] >= arr1[i]) {
            results.push(arr1[i]);
            // increment the value because the current value is sorted
            i++;
        } else {
            results.push(arr2[j]);
            // increment the value because the current value is sorted
            j++;
        }
    }
    // when complete and the lengths are different, we need to finish sorting with another loop
    // we need two loop -- one for each outcome (if i was shorter than j and if j was shorter than i)
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    //return our sorted array
    return results;

}

console.log(merge([3, 7], [1, 9])); // [1, 3, 7, 9]

// Second Method - merge and sort with recursion
function mergeSort(arr) {
    // base case for returning our arrays
    if (arr.length <= 1) return arr;
    // create variable mid  that gives us the halfway point of arr
    let mid = Math.floor(arr.length / 2);
    // use slice to split arr in two halves
    // call mergeSort on each half
    let left = mergeSort(arr.slice(0, mid)); // will sort the left side
    let right = mergeSort(arr.slice(mid)); // will merge right side
    // need to merge our two arrays left and right (use function already built)
    // these are already sorted and will work with the earlier function
    // because they will eventually equal arrays with only 1 value (sorted arrays)
    return merge(left, right);
}

console.log(mergeSort([2, 1, 5, 4, 9, 6, 7]));
