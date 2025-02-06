
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

console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

//Time complexity O(n)
//Space complexity O(1)