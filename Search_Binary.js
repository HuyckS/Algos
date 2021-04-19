// Binary Search

function binarySearch(arr, el) {
    // set a pointer at the furthest left index
    let start = 0;
    // set a pointer at the furthest right index
    let end = arr.length - 1;
    // set the middle to be the avg rounded down of the left and right
    let mid = Math.floor((start + end) / 2)
    // loop until we find the el (element) that equals the element in the arr (arr[mid])
    // AND we need to make sure it is in the arr, if not start will be reassigned over and over to 1 more than end
    while (arr[mid] !== el && start <= end) {
        // if the element is less than the value at the middle index, then move the end to one less than the mid
        if (el < arr[mid]) {
            end = mid - 1;
        }
        // if the element is greater than the value at the middle index, then move the start to one more than the mid
        if (el > arr[mid]) {
            start = mid + 1;
        }
        // reset the mid with the new start or end
        mid = Math.floor((start + end) / 2);
    }
    // if we find our element, return mid
    if (arr[mid] === el) {
        return mid;
    } else {
        return -1
    }


}

console.log(binarySearch([2, 3, 5, 6, 7, 11, 13, 15, 28], 15));