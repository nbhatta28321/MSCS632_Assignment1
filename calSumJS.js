function calculateSum(arr) {
    let total = 0;  // Fixed typo
    for (let num of arr) {
        total += num;
    }
    return total;
}

let numbers = [1, 2, 3, 4, 5];
let result = calculateSum(numbers);
console.log("Sum in JavaScript:", result);
