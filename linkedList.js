

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    getSize() {
        return this.size
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log('the list is empty')
        } else {
            let current = this.head
            let listValues = ''
            while (current) {
                listValues += `${current.value} -> `
                current = current.next
            }
            console.log(listValues)
        }
    }
}


const list = new LinkedList()

// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.append(40)
// list.append(50)
// list.print()

class Node1 {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList1 {
    constructor() {
        this.head = null
    }

    append(value) {
        const node = new Node1(value)
        if (!this.head) {
            this.head = node
        } else {
            let currHead = this.head
            while (currHead.next) {
                currHead = currHead.next
            }
            currHead.next = node
        }
    }

    prepend(value) {
        const node = new Node1(value)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
    }

    print() {
        if (!this.head) {
            console.log('Linked list is empty...')
        } else {
            let currHead = this.head
            let val = ''
            while (currHead) {
                val += `${currHead.value} -> `
                currHead = currHead.next
            }
            console.log('start -> ',val, 'null')
        }
    }
}

const list1 = new LinkedList1()

list1.append(10)
list1.append(20)
list1.append(30)
list1.append(40)
list1.append(50)
list1.prepend(60)
list1.print()