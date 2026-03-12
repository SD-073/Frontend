// FILTER creates a new array containing all elements that match the condition defined in the callback.

// Create an array called numbers with values: 50, 5, 10, 15, 20, 25, 30.
const numbers = [50, 5, 10, 15, 20, 25, 30];
// Use the filter method to create a new array called numbersGreaterThan15 containing all numbers from numbers that are greater than 15.

const numbers15 = numbers.filter((number) => number > 15);
console.log(numbers15);

// Create an array called students containing the following objects:
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 88 },
  { name: 'Eve', grade: 95 },
];

// Use the filter Method to Create a New Array with Students Who Scored Above 80:
const studentsAbove80 = students.filter((student) => student.grade > 80);
console.log(studentsAbove80);
