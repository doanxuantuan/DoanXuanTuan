//  Implementation A - Loop

var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

//  Implementation B - Recursive Function

var sum_to_n_b = function(n) {
    if (n <= 1) {
        return n;
    } else {
        return n + sum_to_n_b(n - 1);
    }
};

//Implementation C - Mathematical Formula

var sum_to_n_c = function(n) {
    return n * (n + 1) / 2;
};

console.log(sum_to_n_a(10)) //result = 55
console.log(sum_to_n_b(10)) //result = 55
console.log(sum_to_n_c(10)) //result = 55

// *Explanation:*

// - *Implementation A* uses a loop to iterate from 1 to n, adding each number to a sum accumulator.

// - *Implementation B* uses recursion, a functional programming technique where a function calls itself with a smaller part of the problem until a base case is reached.

// - *Implementation C* leverages the mathematical formula for the sum of the first n natural numbers, n * (n + 1) / 2, which is a direct calculation and the most efficient of the three methods.