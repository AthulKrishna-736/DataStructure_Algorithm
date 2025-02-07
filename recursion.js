//This file containt the recustion questions practising.

/* Time compelxity for recursion
    f(3) => f(3-1) +f(3-2)
    f(3-1 || 2) => f(2-1) + f(2-2)
    f(3-2 || 1) => f(1-1) + f(1-2)

    f(1) => 1 && f(0) => 0 = 1 + 0 - 1
    f(1) => 1 && f(0) => 0 = 1 + 0 - 1
    
    final return like 1 + 1 = 2;
    f(3) => 1 + 1 => 2 2 is the resutl

    time compelxtity like each of the sub levels are going power of 2
    so its like 2^1 2^2 and goes on so the complexit here is 
    O(2^n);
*/

/* 
    recursion(6)
 ├── recursion(5)
 │    ├── recursion(4)
 │    │    ├── recursion(3)
 │    │    │    ├── recursion(2)
 │    │    │    │    ├── recursion(1) → returns 1
 │    │    │    │    ├── recursion(0) → returns 0
 │    │    │    │    └── recursion(2) → returns 1 (1+0)
 │    │    │    ├── recursion(1) → returns 1
 │    │    │    └── recursion(3) → returns 2 (1+1)
 │    │    ├── recursion(2)
 │    │    │    ├── recursion(1) → returns 1
 │    │    │    ├── recursion(0) → returns 0
 │    │    │    └── recursion(2) → returns 1 (1+0)
 │    │    └── recursion(4) → returns 3 (2+1)
 │    ├── recursion(3)
 │    │    ├── recursion(2)
 │    │    │    ├── recursion(1) → returns 1
 │    │    │    ├── recursion(0) → returns 0
 │    │    │    └── recursion(2) → returns 1 (1+0)
 │    │    ├── recursion(1) → returns 1
 │    │    └── recursion(3) → returns 2 (1+1)
 │    └── recursion(5) → returns 5 (3+2)
 ├── recursion(4)
 │    ├── recursion(3)
 │    │    ├── recursion(2)
 │    │    │    ├── recursion(1) → returns 1
 │    │    │    ├── recursion(0) → returns 0
 │    │    │    └── recursion(2) → returns 1 (1+0)
 │    │    ├── recursion(1) → returns 1
 │    │    └── recursion(3) → returns 2 (1+1)
 │    ├── recursion(2)
 │    │    ├── recursion(1) → returns 1
 │    │    ├── recursion(0) → returns 0
 │    │    └── recursion(2) → returns 1 (1+0)
 │    └── recursion(4) → returns 3 (2+1)
 └── recursion(6) → returns 8 (5+3)

*/

function recursion(n) {
    if (n < 2) return n;
    return recursion(n - 1) + recursion(n - 2);
}

// console.log(recursion(3))
// console.log(recursion(6))


//find factorial of a integer here ?

function recursiveFactorial(n) {
    if (n == 0) return 1;

    return n * recursiveFactorial(n - 1)
}

// console.log(recursiveFactorial(4))
// console.log(recursiveFactorial(5))

//Time complexity O(n)


/* 

power(2, 8)
 ├── power(2, 4)
 │    ├── power(2, 2)
 │    │    ├── power(2, 1)
 │    │    │    ├── power(2, 0) → returns 1
 │    │    │    └── power(2, 1) → returns 2*1 = 2
 │    │    ├── power(2, 2) → returns 2*2 = 4
 │    ├── power(2, 4) → returns 4*4 = 16
 └── power(2, 8) → returns 16*16 = 256

*/

function sum(n) {
    if (n == 0) {
        return n;
    }
    return n + sum(n - 1)
}

// console.log(sum(5))
// console.log(sum(4))

//Time complexity  O(n)
//space complexity O(n)

function power(n, p) {
    if (p === 0) {
        return 1;
    }
    return n * power(n, p - 1);
}

// console.log(power(2, 3))
// console.log(power(3, 3))


//reverse a string here  
function revString(str, index = 0, result = '') {
    if (index == str.length) return result;

    return revString(str, index + 1, str[index] + result)
}

function reverseStr(str, index = str.length - 1) {
    if(index < 0) return '';
    return str[index] + reverseStr(str, index - 1)
}

console.log(reverseStr('hello world'))

console.log(revString('hello'))
console.log(revString('world'))