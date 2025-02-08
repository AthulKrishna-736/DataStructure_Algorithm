//searching problems here

//Linear search
function findElem(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1
}

// console.log(findElem([-3, -4, 5, 7, 1, 8, -9], -9))
// console.log(findElem([-3, -4, 5, 7, 1, 8, -9], -21))
// console.log(findElem([-3, -4, 5, 7, 1, 8, -9], 9))


function findBinaryElem(arr, target) {
    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (target == arr[middle]) {
            return middle;
        }
        if (target < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1

}


// console.log(findBinaryElem([1, 2, 3, 4, 5, 6, 9], 3))
// console.log(findBinaryElem([4, 5, 6, 7, 8, 9], 5))

//Time complexity O(log n) 