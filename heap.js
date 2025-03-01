class MinHeap {
    constructor() {
        this.heap = [];
    }

    left(i) {
        return 2 * i + 1
    }

    right(i) {
        return 2 * i + 2
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    getMin() {
        return this.heap[0]
    }

    insert(value) {
        this.heap.push(value)
        let i = this.heap.length - 1

        while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
            let p = this.parent(i)
            if (this.heap[p] > this.heap[i]) {
                [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
                i = p
            } else {
                break
            }
        }
    }

    deleteMin() {
        if (this.heap.length === 0) {
            return null
        }
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()

        this.heapifyDown(0)
        return min
    }

    heapifyDown(i) {
        let left = this.left(i)
        let right = this.right(i)
        let smallest = i

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
            this.heapifyDown(smallest)
        }
    }

    printHeap() {
        console.log(this.heap)
    }
}

let heap = new MinHeap()
// heap.insert(10)
// heap.insert(5)
// heap.insert(15)
// heap.insert(3)
// heap.insert(8)
// heap.printHeap()
// heap.deleteMin()
// heap.printHeap()

class MinHeap1 {
    constructor() {
        this.heap = []
    }

    left(i) {
        return 2 * i + 1
    }

    right(i) {
        return 2 * i + 2
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    insert(value) {
        this.heap.push(value)
        let i = this.heap.length - 1

        while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
            let p = this.parent(i)
            if (this.heap[p] > this.heap[i]) {
                [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
                i = p
            } else {
                break
            }
        }
    }

    printHeap() {
        console.log(this.heap)
    }

    deleteMin() {
        if (this.heap.length == 0) {
            return null
        }

        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }

    heapifyDown(i) {
        let left = this.left(i)
        let right = this.right(i)
        let smallest = i

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
            this.heapifyDown(smallest)
        }
    }
}

const heap1 = new MinHeap1()
// heap1.insert(10)
// heap1.insert(20)
// heap1.insert(3)
// heap1.insert(7)
// heap1.insert(40)
// heap1.printHeap()
// heap1.deleteMin()
// heap1.printHeap()

class MaxHeap {
    constructor() {
        this.heap = []
    }

    left(i) {
        return 2 * i + 1
    }

    right(i) {
        return 2 * i + 2
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    getMax() {
        return this.heap[0]
    }

    insert(value) {
        this.heap.push(value)
        let i = this.heap.length - 1

        while (i > 0 && this.heap[this.parent(i)] < this.heap[i]) {
            let p = this.parent(i)
            if (this.heap[p] < this.heap[i]) {
                [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
                i = p
            } else {
                break
            }
        }
    }

    deleteMax() {
        if (this.heap.length == 0) {
            return null
        }

        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return max
    }

    heapifyDown(i) {
        let left = this.left(i)
        let right = this.right(i)
        let largest = i

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right
        }

        if (largest !== i) {
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
            this.heapifyDown(largest)
        }
    }

    printHeap() {
        console.log(this.heap)
    }
}

const heap2 = new MaxHeap()
// heap2.insert(10)
// heap2.insert(5)
// heap2.insert(15)
// heap2.insert(7)
// heap2.insert(20)
// heap2.insert(30)
// heap2.printHeap()
// heap2.deleteMax()
// heap2.printHeap()

function heapSort(arr) {
    function heapify(arr, n, i) {
        let largest = i
        let left = 2 * i + 1
        let right = 2 * i + 2

        if (left < n && arr[left] > arr[largest]) {
            largest = left
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right
        }
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]
            heapify(arr, n, largest)
        }
    }
    let n = arr.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0)
    }
}

let arr = [10, 3, 15, 7, 8, 20]
heapSort(arr)
// console.log(arr)

function heapSort1(arr) {
    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1
        let right = 2 * i + 2

        if (left < n && arr[left] > arr[largest]) {
            largest = left
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]
            heapify(arr, n, largest)
        }
    }
    let n = arr.length

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0)
    }
}

let arr1 = [12, 54, 3, 6, 20]

heapSort1(arr1)
console.log(arr1)