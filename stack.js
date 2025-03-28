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

    display() {
        console.log(this.items.toString())
    }
}


const stack2 = new Stack2(10)

// stack2.display()
// // stack2.peek()
// stack2.push(10)
// stack2.push(20)
// stack2.display()


class Stack3 {
    constructor(size = Infinity) {
        this.items = []
        this.size = size
    }

    push(element) {
        if (this.items.length >= this.size) {
            console.log('Stack overflow: cannot push')
            return
        }
        this.items.push(element)
    }

    pop() {
        if (this.items.length === 0) {
            return console.log('Stack Underflow: Cannot pop')
        }
        return this.items.pop()
    }

    display() {
        if (this.items.length === 0) {
            return console.log('The stack is empty')
        }
        console.log(this.items.join(' -> '))
    }

    peek() {
        if (this.items.length === 0) {
            return console.log('the stack is empty')
        }

        return this.items[this.items.length - 1]
    }
}

const stack3 = new Stack3(5)

// stack3.display()
// stack3.push(10)
// stack3.push(20)
// stack3.push(30)
// stack3.push(40)
// stack3.display()
// console.log(stack3.peek())
// console.log(stack3.pop())
// stack3.display()
// stack3.push(50)
// stack3.push(60)
// stack3.push(70)
// stack3.display()


class Stack4 {
    constructor(size){
        this.items = []
        this.size = size
    }

    push(element){
        if(this.items.length >= this.size){
            console.log('Stack Overflow')
            return
        }
        this.items.push(element);
    }

    pop(element){
        if(this.items.length == 0){
            console.log('Stack underflow')
            return
        }
        this.items.pop();
    }

    peek(){
        if(this.items.length == 0){
            console.log('Stack is empty')
            return
        }
        return this.items[this.items.length - 1]
    }
}

// const stack4 = new Stack4(5)
// stack4.push(10)
// stack4.push(20)
// stack4.push(30)
// stack4.push(40)
// stack4.push(50)
// stack4.peek()
// stack4.pop()
// console.log('stack itmes: ', stack4.items)