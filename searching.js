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

function recursiveBinSearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, left, right) {
    if (left > right) {
        return -1
    }
    let middle = Math.floor((left + right) / 2)

    if (target == arr[middle]) {
        return middle;
    }
    if (target < arr[middle]) {
        return search(arr, target, left, middle - 1)
    } else {
        return search(arr, target, middle + 1, right)
    }

}

// console.log(recursiveBinSearch([-5, 2, 4, 6, 10], 10))
// console.log(recursiveBinSearch([-5, 2, 4, 6, 10], 6))
// console.log(recursiveBinSearch([-5, 2, 4, 6, 10], 20))


function find1(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            return mid;
        }
        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return -1;
}

// console.log(find1([2, 3, 4, 5, 6, 7], 3))
// console.log(find1([2, 3, 4, 5, 6, 7], 6))


function find2(arr, target) {
    return findTarget(arr, target, 0, arr.length - 1)
}

function findTarget(arr, target, left, right) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] == target) {
        return [target, mid]
    }

    if (target < arr[mid]) {
        return findTarget(arr, target, left, mid - 1)
    } else {
        return findTarget(arr, target, mid + 1, right)
    }
}

// console.log(find2([-5, -3, 4, 8, 9, 13], -3));
// console.log(find2([-5, -3, 4, 8, 9, 13], 13));