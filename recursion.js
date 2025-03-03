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
    if (index < 0) return '';
    return str[index] + reverseStr(str, index - 1)
}
// console.log(reverseStr('hello world'))
// console.log(revString('hello'))
// console.log(revString('world'))


function sumOfDigits(n) {
    if (n == 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10))
}

// console.log(sumOfDigits(1234))
// console.log(sumOfDigits(345))



function removeChar(str, char, index = 0, result = '') {
    if (index == str.length) {
        return result
    }
    if (str[index] == char) {
        result += ''
    } else {
        result += str[index]
    }

    return removeChar(str, char, index + 1, result);
}

// console.log(removeChar('hello', 'l'));
// console.log(removeChar('this is super', 's'))


function removeElem(arr, index, target) {
    if (index >= arr.length) {
        return arr;
    }

    if (arr[index] == target) {
        for (let i = index; i < arr.length; i++) {
            arr[i] = arr[i + 1]
        }
        arr.length -= 1
    }

    // arr[index] === target ? arr.splice(index, 1): arr[index]

    return removeElem(arr, index + 1, target)
}
let arr = [1, 2, 3, 2, 4, 5, 6, 5]
// console.log(removeElem(arr, 0, 2))
// console.log(removeElem(arr,0,5))


function isSorted(arr, index = 0) {
    if (index == arr.length) {
        return true;
    }

    if (arr[index] > arr[index + 1]) return false

    return isSorted(arr, index + 1)
}

let arr1 = [1, 3, 4, 5, 6]
// console.log(isSorted(arr1, 0))


function sumofArray(arr, index = 0, sum = 0) {
    if (index == arr.length) {
        return sum
    }
    sum += arr[index];
    return sumofArray(arr, index + 1, sum)
}

// console.log(sumofArray([1,2,3,4,5,6,7,8,9]));
// console.log(sumofArray([3,4,5,6]));


function maxElem(arr, index = 0, max = -Infinity, secMax = -Infinity) {
    if (index == arr.length) {
        return secMax;
    }

    // max = arr[index] > max ? arr[index] : max  finding max
    if (arr[index] > max) {
        secMax = max
        max = arr[index]
    } else if (arr[index] > secMax) {
        secMax = arr[index]
    }

    return maxElem(arr, index + 1, max, secMax)
}


// console.log(maxElem([1,3,6,2,5,8,7]))
// console.log(maxElem([3,5,11,6,7,12]))

function isPallindrome(str, index = 0, end) {
    if (index == end) {
        return true
    }

    if (str[index] != str[end]) {
        return false;
    }

    return isPallindrome(str, index + 1, end - 1)
}
let a = 'hello'
let b = 'wow'
// console.log(isPallindrome(a, 0,a.length-1))
// console.log(isPallindrome(b, 0, b.length-1))


function subsequences(str, index = 0, current = "") {
    if (index === str.length) {
        console.log(current);
        return;
    }
    subsequences(str, index + 1, current + str[index]);
    subsequences(str, index + 1, current);
}

// subsequences("abc");


function printNto1(n) {
    if (n < 1) return;
    console.log(n);
    printNto1(n - 1);
}
// printNto1(5);


function sumOfN(n) {
    if (n == 0) return 0;
    return n + sumOfN(n - 1);
}
// console.log(sumOfN(5));

function countDigits(n) {
    if (n === 0) return 0;
    return 1 + countDigits(Math.floor(n / 10));
}
// console.log(countDigits(12345));


function reverseArray(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverseArray(arr, start + 1, end - 1);
}
let arr2 = [1, 2, 3, 4, 5];
// reverseArray(arr2);
// console.log(arr2);


function findSubsets(arr, index = 0, current = []) {
    if (index === arr.length) {
        console.log(current);
        return;
    }
    findSubsets(arr, index + 1, [...current, arr[index]]);
    findSubsets(arr, index + 1, current);
}
// findSubsets([1, 2, 3]);


function countVowels(str, index = 0, count = 0) {
    if (index === str.length) return count;

    let vowels = "aeiouAEIOU";
    if (vowels.includes(str[index])) count++;

    return countVowels(str, index + 1, count);
}

console.log(countVowels("hello world"));



function findMin(arr, index = 0, min = Infinity) {
    if (index === arr.length) return min;
    if (arr[index] < min) min = arr[index];

    return findMin(arr, index + 1, min);
}

console.log(findMin([3, 1, 4, 1, 5, 9, 2, 6])); 


function toBinary(n) {
    if (n === 0) return "";
    return toBinary(Math.floor(n / 2)) + (n % 2);
}

console.log(toBinary(10));


function productArray(arr, index = 0) {
    if (index === arr.length) return 1;
    return arr[index] * productArray(arr, index + 1);
}

console.log(productArray([1, 2, 3, 4])); 


function isPrime(n, i = 2) {
    if (n <= 1) return false;
    if (i * i > n) return true;
    if (n % i === 0) return false;
    
    return isPrime(n, i + 1);
}

console.log(isPrime(7));
console.log(isPrime(10)); 
