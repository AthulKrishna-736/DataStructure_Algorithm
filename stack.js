class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString())
    }
}

const stack = new Stack()

// console.log(stack.isEmpty())
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// console.log(stack.size())
// console.log(stack.pop())
// console.log(stack.peek())
// stack.print()


class Stack1 {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        if (this.isEmpty()) {
            console.log('stack is undrfleo')
            return null
        }
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    print() {
        console.log(this.items.toString())
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }
}

const stack1 = new Stack1()

// stack1.push(10)
// stack1.push(20)
// stack1.push(30)
// stack1.push(40)

// console.log(stack1.peek())
// console.log(stack1.pop())
// console.log(stack1.pop())
// console.log(stack1.pop())
// console.log(stack1.pop())
// stack1.pop()
// stack1.print()


class Stack2 {
    constructor(length) {
        this.items = new Array(length)
        this.top = -1
    }

    push(element) {
        if (this.top >= this.items.length - 1) {
            throw new Error('stack is overflow')
        }
        this.items[++this.top] = element
    }

    pop() {
        if (this.top == -1) {
            throw new Error('stack is underflow')
        }

        const popElem = this.items[this.top]
        this.items[this.top] = undefined
        this.top--
        return popElem;
    }

    peek() {
        if (this.top === -1) {
            throw new Error('stack is empty')
        }
        return this.items[this.top]
    }

    isEmpty() {
        return this.top === -1
    }

    isFull() {
        return this.top === this.items.length - 1
    }

    display(){
        console.log(this.items.toString())
    }
}


const stack2 = new Stack2(10)

stack2.display()
// stack2.peek()
stack2.push(10)
stack2.push(20)
stack2.display()
