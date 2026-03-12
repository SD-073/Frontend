// some checks whether at least one element in the array satisfies the given condition.
// returns true if at least one element satisfies the condition; otherwise false

// every checks whether all elements in the array satisfy the given condition.
// returns true if all elements satisfy the condition; otherwise false.

// Create an array called numbers containing values in order: 4, 8, 15, 16, 23, 42.
const numbers = [4, 8, 15, 16, 23, 42];

// Use the some method to check if there are any numbers that are greater than 20.
const greater20 = numbers.some((number) => number > 20);
// console.log(greater20);

// Use the every method to check if all numbers in numbers are less than 50.

const greater50 = numbers.every((number) => number < 50);
// console.log(greater50);

// Create an array called students containing the following objects:
const students = [
  { name: 'Alice', age: 25, passed: true },
  { name: 'Bob', age: 22, passed: false },
  { name: 'Charlie', age: 27, passed: true },
  { name: 'David', age: 20, passed: true },
];

// Use the some Method to Check if Any Student Failed:
const hasFailed = students.some((student) => student.passed === false);
// console.log(hasFailed);

// Use the every method to check if all students are older than 18.
const above18 = students.every((student) => student.age > 18);
console.log(above18);
