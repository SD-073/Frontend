// FIND searches the array and returns the first element that satisfies the given condition.
// Create an array called numbers with values: 5, 10, 15, 20, 25, 30, 50.
const numbers = [5, 10, 15, 20, 25, 30, 50];
// Use the find method to locate the first number in numbers that is greater than 25.

const firstGreaterThan25 = numbers.find((number) => number > 25);
console.log(firstGreaterThan25);

// Create an array called people containing the following objects
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

// console.log(people);

// Use the find Method to Locate a Person Named "Charlie":

const findCharlie = people.find((person) => person.name === 'Charlie');
console.log(findCharlie);
