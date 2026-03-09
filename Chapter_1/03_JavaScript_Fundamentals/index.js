// // PRIMITIVES
// // STRING
// let name = 'John';
// console.log(name);
// console.log(typeof name);

// // Number
// let age = 30;
// console.log(age);
// console.log(typeof age);

// //BigInt
// let bigNumber = BigInt(23213123123123);
// console.log(bigNumber);
// console.log(typeof bigNumber);

// let anotherNumber = 123123213123213n;
// console.log(typeof anotherNumber);

// let isStudent = true;
// console.log(typeof isStudent);

// let isLoggedIn = true;

// NON-PRIMITIVES
// OBJECTS

// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   isStudent: true,
// };

// console.table(person);
// console.log(typeof person);
// console.log(person.firstName);
// console.log(person.lastName);

// ARRAYS
// let fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits);
// console.log(typeof fruits);
// console.log(typeof console);

// VARIABLES
// var name = 'John';
// name = 'not John';
// console.log(name);

// let student = 'Jane';
// console.log('Before reassign:', student);
// student = 'not Jane';
// console.log('after reassign:', student);

// const age = 30;
// age = 31;

// COMPARISON OPERATORS
// const a = 5;
// const b = 10;

// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);

// console.log(a == b); equal to
// console.log(a === b); equal value and type
// console.log(a != b);
// console.log(a !== b);

// LOGICAL OPERATORS
// console.log(5 > 0);
// console.log(5 > 0 && 10 > 0);
// console.log(5 > 6 || 10 > 0);
// console.log(!true);
// console.log(!false);

// CONDITIONALS
// const condition = false;

// if (condition) {
//   // run this code if condition is true
//   console.log('condition is true');
// } else {
//   // run this code if condition is false
//   console.log('condition is false');
// }

// const isLoggedIn = false;

// if (isLoggedIn) {
//   console.log('Welcome');
// } else {
//   console.log('you have to log in');
// }

// const age = 18;

// if (age >= 18) {
//   console.log('You are an adult!');
// } else {
//   console.log('You are not an adult yet');
// }

// const condition = '';

// if (condition) {
//   console.log('condition is true');
// } else {
//   console.log('condition is false');
// }

// const score = 60;

// if (score >= 90) {
//   console.log('Excellent');
// } else if (score >= 80) {
//   console.log('good');
// } else if (score >= 70) {
//   console.log('just so...');
// } else {
//   console.log('Needs improvment');
// }

// SWITCH

// const day = 'Sunday';

// switch (day) {
//   case 'Monday':
//     console.log('Start of the week');
//     break;

//   case 'Friday':
//     console.log('Almost Weekend');
//     break;

//   case 'Saturday':
//   case 'Sunday':
//     console.log('Weekend!');
//     break;

//   default:
//     console.log('Regular day');
// }

// TERNARY OPERATOR
// const age = 20;

// age >= 18 ? console.log('Adult') : console.log('not Adult');

// FUNCTIONS

// function greet() {
//   console.log('Hello and welcome to JavaScript');
// }

// greet();

// function add(a, b) {
//   return a + b;
// }

// console.log(add(15, 10));

function divide(a, b) {
  return a / b;
}

// console.log(divide(100, 10));

// EXAMPLE
// QUIZ

// const question = 'What is the capital of France?';
// const options = ['Lyon', 'Paris', 'Lille'];
// const correctAnswer = 'Paris';

// console.log(question);
// console.table(options);

// function checkAnswer(userAnswer) {
//   if (userAnswer === correctAnswer) {
//     console.log('Correct!');
//   } else {
//     console.log(`Incorrect, the correct answer is: ${correctAnswer}`);
//   }
// }

// checkAnswer('Paris');

// ARROW FUNCTIONS
// const multiply = (a, b) => a * b;
// console.log(multiply(10, 10));

// SCOPE
// let name = 'John';

// if (name == 'John') {
//   let name = 'not John';
// }

// console.log(name);

// let name = 'Alex';

// if (name === 'Alex') {
//   let name = 'Claus';
//   console.log('Inner Scope:', name);
// }

// console.log('Global Scope:', name);

// TRY-CATCH

function riskyOperation() {
  throw new Error('Something broke!');
}

// riskyOperation();

try {
  // code that might cause an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // code that runs, if an error occurs
  console.log('Error:', error.message);
}

const name = 'something';
console.log(name);
