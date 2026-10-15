// Task: JavaScript - Arrays and Functions
// Performs max, sum, and odd-count operations on an array.

const arr = [4, 8, 2, 11, 6, 7, 10];

// Arrow function: find the maximum number in the array
const findMax = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
};

// Anonymous function: calculate the sum of all elements
const calculateSum = function (array) {
  let sum = 0;
  for (const num of array) sum += num;
  return sum;
};

// Named function: count the number of odd numbers
function countOddNumbers(array) {
  let count = 0;
  for (const num of array) {
    if (num % 2 !== 0) count++;
  }
  return count;
}

console.log("Example Array:-" + JSON.stringify(arr));
console.log("Maximum number:" + findMax(arr));
console.log("Sum of all elements:" + calculateSum(arr));
console.log("Count of odd numbers:" + countOddNumbers(arr));


// Show only the output in the browser (only when a document exists)
if (typeof document !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const out = document.getElementById("output");
    if (out) {
      out.textContent =
        "Array:-" + JSON.stringify(arr) + "\n" +
        "Maximum number:" + findMax(arr) + "\n" +
        "Sum of all elements:" + calculateSum(arr) + "\n" +
        "Count of odd numbers:" + countOddNumbers(arr);
    }
  });
}
