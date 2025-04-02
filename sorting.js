/*
🔹 Initial Array:
[-6] [20] [-2] [4] [8]

-----------------------------------
🔹 Pass 1 (i = 0) - Moving largest to the right:
[-6] [20] [-2] [4] [8]   → No Swap
[-6] [-2] [20] [4] [8]   → Swap (20 & -2)
[-6] [-2] [4] [20] [8]   → Swap (20 & 4)
[-6] [-2] [4] [8] [20]   → Swap (20 & 8) ✅ (20 is now in place)

🎯 Largest element (20) is now at the end!

-----------------------------------
🔹 Pass 2 (i = 1) - Checking remaining elements:
[-6] [-2] [4] [8] [20]   → No Swap
[-6] [-2] [4] [8] [20]   → No Swap
[-6] [-2] [4] [8] [20]   → No Swap ✅ (Already sorted)

💡 No swaps! We stop early.

-----------------------------------
✅ Final Sorted Array:
[-6] [-2] [4] [8] [20]

🚀 Sorting Complete! Since no swaps occurred in Pass 2, the algorithm exits early.
*/




function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

const arr = [-6, 20, -2, 4, 8]
// bubbleSort(arr)
// console.log(arr)

function bubbleSort1(arr) {
    let swapped;
    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swapped = true
            }
        }
        if (!swapped) {
            break
        }
    }
}

// bubbleSort1(arr)
// console.log(arr)

function bubbleSort2(arr) {
    let swapped = true;
    while (swapped) {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    }
}

// bubbleSort2(arr)
// console.log(arr)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numToInsert
    }
}

// insertionSort(arr)
// console.log(arr)

function insertionSort1(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
}
const arr1 = [4, 6, 2, 3, 7, 1]
// insertionSort1(arr1)
// console.log(arr1)

function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
}

// insertionSort2(arr1)
// console.log(arr1)


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}

// selectionSort(arr1)
// console.log(arr1)


function selectionSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < minIndex) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

// console.log(selectionSort1([3, 6, 1, 8, 4]))


function selectionSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

// console.log(selectionSort2([-9, -4, 7, 2, 8, 15]))


function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// console.log(quickSort([3, 5, 1, 9, 6, 2]))


function quickSort1(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort1(left), pivot, ...quickSort1(right)]
}



function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

// console.log(mergeSort([5, 3, 8, 4, 2, 7, 1]));

function mergeSort1(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    return merge1(mergeSort1(leftArr), mergeSort1(rightArr))
}

function merge1(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

// console.log(mergeSort1([3, 8, 1, 2, 9]))

function mergeSort2(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge2(mergeSort2(left), mergeSort2(right))
}

function merge2(left, right) {
    const sortedArr = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

// console.log(mergeSort1([9, 1, 7, 3, 5]))



function mergeSort3(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge2(mergeSort2(left), mergeSort2(right))
}

function merge3(left, right) {
    const sortedArr = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

// console.log(mergeSort3([1,6,2,7,3,7,2]))