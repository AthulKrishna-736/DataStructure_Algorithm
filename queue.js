class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0]
    }
    return null
  }

  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}

// const queue1 = new Queue()

// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.print()
// queue1.dequeue()
// queue1.print()
// console.log(queue.peek())


class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

// const queue = new CircularQueue(5);
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// console.log(queue.size());
// queue.print();
// console.log(queue.isFull());
// console.log(queue.dequeue());
// console.log(queue.peek());
// queue.print();
// queue.enqueue(60);
// queue.print();



class Queue1 {
  constructor(maxSize = Infinity) {
    this.items = []
    this.maxSize = maxSize
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log('queue overflow')
      return
    }
    this.items.push(element)
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('queue underflow cant dequeued')
      return null
    }
    return this.items.shift()
  }

  display() {
    if (this.isEmpty()) {
      return console.log('the queue is empty')
    }
    console.log(this.items.join(' -> '))
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Queue is empty, nothing to peek')
      return null
    }
    return this.items[0]
  }

  isFull() {
    return this.items.length >= this.maxSize
  }

  isEmpty() {
    return this.items.length === 0
  }
}

const queue1 = new Queue1(10)

// queue1.display()
// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.enqueue(40)
// queue1.display()
// console.log(queue1.dequeue())
// queue1.display()


class CircularQueue1 {
  constructor(maxSize) {
    this.maxSize = maxSize
    this.items = new Array(maxSize)
    this.front = -1
    this.rear = -1
  }

  isFull() {
    return (this.rear + 1) % this.maxSize == this.front
  }

  isEmpty() {
    return this.front === -1
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log('Queue is full cannot enqueue')
      return
    }

    if (this.isEmpty()) {
      this.front = 0
    }

    this.rear = (this.rear + 1) % this.maxSize
    this.items[this.rear] = element
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue underflow: cannot dequeue')
      return
    }

    const removedElement = this.items[this.front]
    if (this.front === this.rear) {
      this.front = this.rear = -1
    } else {
      this.front = (this.front + 1) % this.maxSize
    }
    return removedElement
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.items[this.front]
    }
  }

  display() {
    if (this.isEmpty()) {
      console.log('The queue is empty')
      return
    }
    let i = this.front
    let output = []
    while (true) {
      output.push(this.items[i])
      if (i == this.rear) {
        break
      }
      i = (i + 1) % this.maxSize
    }
    console.log(`Queue ${output.join(' -> ')}`)
  }

}


const cirQueue = new CircularQueue1(5)

cirQueue.display()
cirQueue.enqueue(10)
cirQueue.enqueue(20)
cirQueue.enqueue(30)
cirQueue.enqueue(40)
cirQueue.enqueue(50)
cirQueue.enqueue(60)
cirQueue.display()
console.log(cirQueue.peek())
console.log(cirQueue.dequeue())
cirQueue.display()
cirQueue.enqueue(60)
cirQueue.display()


class CircularQueue2 {
  constructor(maxSize) {
    this.items = new Array(maxSize)
    this.maxSize = maxSize
    this.front = -1
    this.rear = -1
  }

  isFull() {
    return (this.rear + 1) % this.maxSize == this.front
  }

  isEmpty() {
    
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log('the circular queue is full')
      return
    }
  }
}