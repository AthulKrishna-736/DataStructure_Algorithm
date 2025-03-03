class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }
    pop() {
        if (this.stack.length === 0) return null;
        let removed = this.stack.pop();
        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return removed;
    }
    top() {
        return this.stack.length ? this.stack[this.stack.length - 1] : null;
    }
    getMin() {
        return this.minStack.length ? this.minStack[this.minStack.length - 1] : null;
    }
}

class MaxStack {
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }
    push(val) {
        this.stack.push(val);
        if (this.maxStack.length === 0 || val >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(val);
        }
    }
    pop() {
        if (this.stack.length === 0) return null;
        let removed = this.stack.pop();
        if (removed === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
        }
        return removed;
    }
    top() {
        return this.stack.length ? this.stack[this.stack.length - 1] : null;
    }
    getMax() {
        return this.maxStack.length ? this.maxStack[this.maxStack.length - 1] : null;
    }
}

const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
console.log(minStack.getMin()); 
minStack.pop();
console.log(minStack.getMin()); 

const maxStack = new MaxStack();
maxStack.push(1);
maxStack.push(4);
maxStack.push(2);
console.log(maxStack.getMax()); 
maxStack.pop();
console.log(maxStack.getMax()); 