class MonotonicQueue {
    constructor() {
        this.queue = [];
    }

    push(value) {
        while (this.queue.length > 0 && this.queue[this.queue.length - 1] < value) {
            this.queue.pop();
        }
        this.queue.push(value);
    }

    pop(value) {
        if (this.queue.length > 0 && this.queue[0] === value) {
            this.queue.shift();
        }
    }

    max() {
        return this.queue[0];
    }
}

function maxSlidingWindow(nums, k) {
    let mq = new MonotonicQueue();
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        mq.push(nums[i]);
        if (i >= k - 1) {
            result.push(mq.max());
            mq.pop(nums[i - k + 1]);
        }
    }

    return result;
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); 
