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

        while (i > 0 && this.heap[this.parent(i)] > this.heap) {
            let p = this.parent(i)
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
            i = p
        }
    }

    printHeap(){
        console.log(this.heap)
    }
}

const heap = new MinHeap()
heap.insert(10)
heap.insert(5)
heap.insert(15)
heap.insert(3)
heap.insert(8)
heap.printHeap()