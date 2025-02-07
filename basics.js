
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// console.log(findLargest([10,3,5,6,245,56,246,4,8]))

//Big o cheat sheet
//for loop = O(n)
//nested loops = O(n^2);
//input sized reduced by half = O(log n)

function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(7))

// Time complexity O(n)
// Space complexity O(1)

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))

//Time complexity O(n)
//Space complexity O(1)

function Prime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;

}

// console.log(Prime(1))
// console.log(Prime(3))
// console.log(Prime(6))

//Time complexity O(n)
//space complexity O(1)

function powerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

console.log(powerOfTwo(1))
console.log(powerOfTwo(2))
console.log(powerOfTwo(5))

//Time complexity O(log n) 