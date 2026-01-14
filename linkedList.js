

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
            console.log('start -> ', val, 'null')
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
// list1.print()


class Node2 {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList2 {
    constructor() {
        this.head = null
        this.size = 0
    }

    prepend(value) {
        let node = new Node2(value)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        let node = new Node2(value)
        if (!this.head) {
            this.head = node
        } else {
            let currHead = this.head
            while (currHead.next) {
                currHead = currHead.next
            }
            currHead.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid index')
            return
        }

        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node2(value)
            let currHead = this.head
            for (let i = 0; i < index - 1; i++) {
                currHead = currHead.next
            }
            node.next = currHead.next
            currHead.next = node
            this.size++
        }
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            console.log('index is invalid')
            return
        }
        let removeNode;
        if (index == 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    print() {
        if (!this.head) {
            console.log('List is empty')
        } else {
            let currHead = this.head
            let val = ''
            while (currHead) {
                val += `${currHead.value} -> `
                currHead = currHead.next
            }
            console.log('start ->', val, 'null') // visually understand the linked list
        }
    }
}

const list2 = new LinkedList2()

// list2.print()
list2.prepend(10)
list2.prepend(20)
list2.prepend(30)
list2.append(40)
// list2.print()
list2.insert(50, 3)
list2.insert(21, 0)
list2.insert(22, 0)
list2.insert(333, 5)
// list2.print()
// console.log(list2.size)

// console.log(list2.remove(10))
// console.log(list2.remove(0))
// console.log(list2.remove(7))
// list2.print()


class Node3 {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList3 {
    constructor() {
        this.head = null
        this.size = 0
    }

    prepend(value) {
        const node = new Node3(value)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node3(value)
        if (!this.head) {
            this.head = node
        } else {
            let currHead = this.head
            while (currHead.next) {
                currHead = currHead.next
            }
            currHead.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return console.log('Invalid index entered')
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node3(value)
            let currHead = this.head
            for (let i = 0; i < index - 1; i++) {
                currHead = currHead.next
            }
            node.next = currHead.next
            currHead.next = node
        }
        this.size++
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return console.log('invalid index is written here')
        }
        let removeNode;
        if (index == 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let currHead = this.head
            for (let i = 0; i < index - 1; i++) {
                currHead = currHead.next
            }
            removeNode = currHead.next
            currHead.next = removeNode.next
        }
        this.size--
    }

    removeValue(value) {
        if (!this.head) {
            return console.log('List is empty')
        }
        let removeNode;
        if (this.head.value == value) {
            removeNode = this.head.value
            this.head = this.head.next
            this.size--
            return value;
        } else {
            let currHead = this.head
            while (currHead.next && currHead.next.value !== value) {
                currHead = currHead.next
            }
            if (currHead.next) {
                removeNode = currHead.next
                currHead.next = removeNode.next
                this.size--
                return value
            }
            return console.log('no node deleted or null')
        }
    }

    print() {
        if (!this.head) {
            console.log('list is empty')
        } else {
            let currHead = this.head
            let val = ''
            while (currHead) {
                val += `${currHead.value} -> `
                currHead = currHead.next
            }
            console.log('start-> ', val, 'null')
        }
    }
}

const list3 = new LinkedList3()

list3.insert(10, 0)
list3.prepend(20)
list3.append(30)
list3.append(40)
list3.append(10)
// list3.print()
// list3.remove(1)
// console.log(list3.removeValue(10))
// console.log(list3.removeValue(10))
// list3.print()



class Node4 {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList4 {
    constructor() {
        this.head = null
        this.size = 0
    }

    prepend(value) {
        const node = new Node4(value)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node4(value)
        if (!this.head) {
            this.head = node
        } else {
            let currHead = this.head
            while (currHead.next) {
                currHead = currHead.next
            }
            currHead.next = node
        }
        this.size++
    }

    print() {
        if (!this.head) {
            console.log('the list is empty')
        } else {
            let currHead = this.head
            let val = ''
            while (currHead) {
                val += `${currHead.value} -> `;
                currHead = currHead.next
            }
            console.log(val, 'null')
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let currHead = this.head
            const node = new Node4(value)
            for (let i = 0; i < index - 1; i++) {
                currHead = currHead.next
            }
            node.next = currHead.next
            currHead.next = node
        }
        this.size++
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return
        }
        let removeNode;
        if (index == 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let currHead = this.head
            for (let i = 0; i < index - 1; i++) {
                currHead = currHead.next
            }
            removeNode = currHead.next
            currHead.next = removeNode.next
        }
        this.size--
        return removeNode
    }

    removeValue(value) {
        if (!this.head) {
            return console.log('head is empty')
        } else {
            let removeNode;
            if (this.head.value == value) {
                removeNode = this.head
                this.head = removeNode.next
                this.size--
            } else {
                let currHead = this.head
                while (currHead.next && currHead.next.value !== value) {
                    currHead = currHead.next
                }
                if (currHead.next) {
                    removeNode = currHead.next
                    currHead.next = removeNode.next
                    this.size--
                    return
                }
                return console.log('no node is deleted')
            }
        }
    }

    search(value) {
        if (!this.head) {
            return -1;
        }
        let i = 0;
        let currHead = this.head
        while (currHead) {
            if (currHead.value === value) {
                return i
            }
            currHead = currHead.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let currHead = this.head
        while (currHead) {
            let next = currHead.next
            currHead.next = prev
            prev = currHead
            currHead = next
        }
        this.head = prev
    }

    removeFromFront() {

    }

    removeFromEnd() {

    }
}


const list4 = new LinkedList4()

// list4.prepend(10)
// list4.append(20)
// list4.append(30)
// list4.insert(44, 3)
// list4.remove(4)
// console.log(list4.size)
// list4.print()
// list4.removeValue(10)
// list4.append(50)
// list4.append(60)
// list4.print()
// console.log(list4.search(4))
// list4.reverse()
// list4.print()



class Node5 {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList5 {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value) {
        const node = new Node5(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node5(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeFromFront() {
        if (!this.head) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd() {
        if (!this.head) {
            return null
        }
        const value = this.tail.value

        if (this.size == 1) {
            this.head = null
            this.tail = null
        } else {
            let currHead = this.head
            while (currHead.next !== this.tail) {
                currHead = currHead.next
            }
            currHead.next = null
            this.tail = currHead
        }
        this.size--
        return value
    }

    print() {
        if (!this.head) {
            return null
        } else {
            let currHead = this.head
            let val = ''
            while (currHead) {
                val += `${currHead.value} -> `
                currHead = currHead.next
            }
            console.log(val, 'null')
        }
    }
}

const list5 = new LinkedList5()

// list5.append(1)
// list5.append(2)
// list5.append(3)
// list5.prepend(0)
// list5.print()
// console.log(list5.size)
// list5.removeFromFront()
// list5.print()
// list5.removeFromEnd()
// list5.print()


class Node6 {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList6 {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value) {
        const node = new Node6(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node6(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront() {
        if (!this.head) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd() {
        if (!this.head) {
            return null
        }

        if (this.size == 1) {
            this.head = null
            this.tail = null
        } else {
            let currHead = this.head
            while (currHead.next !== this.tail) {
                currHead = currHead.next
            }
            currHead.next = null
            this.tail = currHead
        }
        this.size--
    }

    print() {
        if (!this.head) {
            return null
        }
        let currHead = this.head
        let val = ''
        while (currHead) {
            val += `${currHead.value} -> `
            currHead = currHead.next
        }
        console.log(val, 'null')
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log(index, this.size)
            return null
        }

        if (index == 0) {
            this.prepend(value)
            return
        }

        if (index == this.size) {
            this.append(value)
            return
        } else {
            const node = new Node6(value)
            let currHead = this.head

            for (let i = 0; i < index - 1; i++) {
                currHead = currHead.next
            }
            node.next = currHead.next
            currHead.next = node
            this.size++
        }
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let removeNode;
        if (index == 0) {
            removeNode = this.head.value
            this.head = this.head.next

            if (this.head == null) {
                this.tail = null
            }
            this.size--
            return removeNode
        } else {

            let currHead = this.head
            for (let i = 0; i < index - 1; i++) {
                currHead = currHead.next
            }
            if (currHead.next) {
                removeNode = currHead.next
                if (removeNode === this.tail) {
                    this.tail = currHead
                }
                currHead.next = removeNode.next
                this.size--
            }
        }
    }

    removeValue(value) {
        if (!this.head) {
            return null
        }
        let removeNode;
        if (this.head.value == value) {
            removeNode = this.head
            this.head = this.head.next
            if (this.head == null) {
                this.tail = null;
            }
            this.size--
            return removeNode.value
        }

        let currHead = this.head
        while (currHead.next && currHead.next.value !== value) {
            currHead = currHead.next
        }
        if (currHead.next) {
            removeNode = currHead.next
            currHead.next = removeNode.next
            if (removeNode == this.tail) {
                this.tail = currHead
            }
            this.size--
            return removeNode.value
        }
        console.log('no node is deleted')
    }

    reverse() {
        if (!this.head) {
            return null
        }
        this.tail = this.head
        let prev = null
        let currHead = this.head
        while (currHead) {
            let next = currHead.next
            currHead.next = prev
            prev = currHead
            currHead = next
        }
        this.head = prev
    }
}

const list6 = new LinkedList6()

// list6.append(1)
// list6.append(2)
// list6.append(3)
// list6.prepend(0)
// list6.print()

// list6.removeFromFront()
// list6.print()
// list6.removeFromEnd()
// list6.print()
// console.log(list6.size)
// list6.insert(4, 0)
// list6.print()
// list6.insert(5, 2)
// list6.print()
// list6.remove(3)
// list6.print()
// list6.removeValue(0)
// list6.print()
// list6.reverse()
// list6.print()


class Node7 {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value) {
        const node = new Node7(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node7(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    removeFromFront() {
        if (!this.head) {
            return
        }
        let val = this.head.value
        this.head = this.head.next
        this.size--
        return val
    }

    removeFromEnd() {
        if (!this.head) {
            return null

        }
        const value = this.tail.value
        if (this.size == 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
        return value
    }

    reverse() {
        if (!this.head) {
            return null
        }
        let currHead = this.head
        let prev = null

        while (currHead) {
            prev = currHead.prev
            currHead.prev = currHead.next
            currHead.next = prev
            currHead = currHead.prev
        }
        prev = this.head
        this.head = this.tail
        this.tail = prev
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return null
        }

        if (index == 0) {
            this.prepend(value)
            return
        }
        if (index == this.size) {
            this.append(value)
            return
        }

        let currHead = this.head
        const node = Node7(value)

        for (let i = 0; i < index - 1; i++) {
            currHead = currHead.next
        }

        node.next = currHead.next
        node.prev = currHead
        currHead.next.prev = node
        currHead.next = node
    }

    print() {
        if (!this.head) {
            console.log('this list is empty')
        } else {
            let currHead = this.head
            let val = ''
            while (currHead) {
                val += `${currHead.value} `
                currHead = currHead.next
            }
            console.log(val)
        }
    }
}

const list7 = new DoubleLinkedList()

// list7.print()
// list7.prepend(1)
// list7.prepend(2)
// list7.append(3)
// list7.append(4)
// list7.append(5)
// list7.print()
// console.log(list7.removeFromEnd())
// console.log(list7.removeFromFront())
// list7.print()


class Node8 {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoubleLinkedList1 {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value) {
        const node = Node8(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node8(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return console.log('index is invalid')
        }
        if (index == 0) {
            this.prepend(value)
            return
        }
        if (index == this.size) {
            this.append(value)
            return
        } else {
            const node = new Node8(value)
            let currHead = this.head
            for (let i = 0; i < index - 1; i++) {
                currHead = currHead.next
            }
            node.next = currHead.next
            currHead.next.prev = node
            currHead.next = node
            node.prev = currHead
            this.size++
        }
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return console.log('index is invalid')
        }
        let removeNode;
        if (index == 0) {
            removeNode = this.head
            this.head = this.head.next
            if (this.head) {
                this.head.prev = null
            } else {
                this.tail = null
            }
            this.size--
            return removeNode.value
        }
        if (index == this.size) {
            removeNode = this.tail
            this.tail = this.tail.prev
            if (this.tail) {
                this.tail.next = null
            } else {
                this.head = null
            }
            this.size--
        }

        let currHead = this.head;
        for (let i = 0; i < index - 1; i++) {
            currHead = currHead.next
        }
        removeNode = currHead.next
        currHead.next = removeNode.next

        if (removeNode.next) {
            removeNode.next.prev = removeNode.prev
        }
        this.size--
        return removeNode.value
    }

    print() {
        if (!this.head) {
            console.log('list is empty')
        }
        let currHead = this.head
        let val = '';
        while (currHead) {
            val += `${currHead.value} -> `;
            currHead = currHead.next
        }
        console.log(val)
    }

    reverse() {
        if (!this.head) {
            console.log('the list is empty')
        }
        let prev = null;
        let currHead = this.head;

        while (currHead.next) {
            prev = currHead.prev
            currHead.prev = currHead.next
            currHead.next = prev
            currHead = currHead.prev
        }
    }
}


const list8 = new DoubleLinkedList1()

// list8.prepend(10)
// list8.prepend(20)
// list8.prepend(30)
// list8.append(40)
// list8.append(50)
// list8.insert(60, 3)
// list8.print()
// list8.remove(5)
// console.log(list8.size)
// list8.print()


class Node9 {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList7 {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node9(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node9(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    deleteNode(value) {
        if (!this.head) {
            return null
        } else if (this.head.value === value) {
            this.head = this.head.next
            if (!this.head) this.tail = null
            this.size--
            return
        } else {
            let curr = this.head;
            while (curr.next && curr.next.value !== value) {
                curr = curr.next
            }
            if (curr.next) {
                if (curr.next == this.tail) {
                    this.tail = curr
                }
                curr.next = curr.next.next
            }
            this.size--
        }
    }

    printList() {
        if (!this.head) {
            return null
        } else {
            let curr = this.head
            let val = ''
            while (curr.next) {
                val += curr.value + ' -> '
                curr = curr.next
            }
            console.log(val)
        }
    }

    reverse() {
        if (!this.head) {
            return null
        } else {
            let prev = null
            let curr = this.head
            this.tail = this.head

            while (curr) {
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }

            this.head = prev
        }
    }

}

// const list9 = new LinkedList7()
// list9.prepend(10)
// list9.prepend(20)
// list9.prepend(30)
// list9.append(40)
// list9.append(50)
// list9.append(60)
// // console.log(list9.size)
// // console.log(list9.head)
// // console.log(list9.tail)
// list9.printList()
// list9.deleteNode(50)
// list9.deleteNode(10)
// console.log(list9.size)
// list9.printList()


class Node10 {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoubleLinkedList2 {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node10(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node10(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    reverse() {
        if (!this.head || !this.head.next) return;

        let curr = this.head
        let temp = null

        while (curr) {
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp

            curr = curr.prev
        }
        temp = this.head
        this.head = this.tail
        this.tail = temp
    }
}


const list10 = new DoubleLinkedList2()
// list10.append(10)
// list10.append(12)
// list10.append(13)
// list10.append(13)
// list10.prepend(25)
// list10.prepend(206)
// list10.prepend(208)
// list10.prepend(200)
// console.log(list10.head)


class Node11 {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList12 {
    constructor() {
        this.head = null
    }

    append(val) {
        const node = new Node11(val);
        if (this.head == null) {
            this.head = node;
        } else {
            let curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }

            curr.next = node;
        }
    }

    prepend(val) {
        const node = new Node11(val);
        if (this.head == null) {
            this.head = node;
        } else {
            let curr = this.head;
            node.next = curr;
            this.head = curr;
        }
    }

    printList() {
        let curr = this.head;
        let res = ' ';
        while (curr) {
            res += curr.value;
            curr = curr.next;
        }
        console.log(res);
    }
}