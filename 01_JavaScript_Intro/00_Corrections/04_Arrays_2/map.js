// map iterates over each element of the array.
// It creates a new array made up of the return values of the callback function.
// The original array is not modified, and the returned array can contain different elements than the original.
// Initialize an Array of Numbers:
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

// Use the map method to create a new array called doubledNumbers where each value is double the corresponding value in numbers.

const doubledNumbers = numbersArray.map((number) => number * 2);
console.log(doubledNumbers);

// Use the map method to create a new array called stringNumbers where each value is the corresponding number in numbers converted to a string with the prefix "Number: "

const stringNumbers = numbersArray.map((number) => 'Number: ' + number);
const stringNumbers2 = numbersArray.map((number) => `Number: ${number}`);
console.log(stringNumbers);
console.log(stringNumbers2);

// Use the map method to create a new array called numberObjects where each value is an object with the properties original (the original number) and squared (the square of the number)

// const numberObjects = numbersArray.map((number) => ({
//   original: number,
//   squared: number * number,
// }));

// console.log(numberObjects);
