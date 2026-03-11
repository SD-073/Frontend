// const person = {
//   name: 'John',
//   age: 30,
//   isStudent: false,
//   sayHi: function () {
//     console.log('Hey, my name is John!');
//   },
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.sayHi);

// person.sayHi();

// const person = {
//   name: 'Alice',
//   age: 25,
//   isStudent: true,
//   sayHello: function () {
//     return `${this.name} is ${this.age} years old.`;
//   },
// };

// console.log(person.sayHello());

// const person = {
//   name: 'Alice',
//   age: 25,
// };

// console.log(
//   'My name is ' + person.name + ' and i am ' + person.age + ' years old',
// );

// console.log(`My name is ${person.name} and i am ${person.age} years old`);

// const person = {
//   name: 'Alice',
//   age: 25,
// };

// add new properties
// person.email = 'alice@example.com';
// person['major'] = 'Computer Science';

// // modifying properties
// person.age = 26;

// // delete property
// delete person.major;

// console.log(person);

// Accessing object properties
// const person = {
//   name: 'John',
//   age: 30,
// };

// console.log(person.name);
// console.log(person.age);

// console.log(person['name']);

// const car = {
//   brand: 'BMW',
//   speed: 200,
// };

// console.log(car.brand);
// console.log(car['brand']);

// // console.log(car.brand);
// // console.log(car.speed);

// console.log('hello');
// console.warn('Be careful!');
// console.error('Something went wrong');
// person.sayHi();

// BUILT-IN OBJECTS
// MATH

// console.log(Math.random()); // returns a random number between 0 and 1
// console.log(Math.round(4.5)); // rounds to the nearest integer 4.6 => 5
// console.log(Math.floor(4.9)); // rounds DOWN to the nearest integer
// console.log(Math.ceil(4.1)); // rounds UP to the nearest integer
// console.log(Math.sqrt(16)); // returns the square root
// console.log(Math.pow(2, 5)); // power of 2
// console.log(Math.max(3, 7, 1)); // return the largest number
// console.log(Math.min(3, 7, 1)); // return the smallest number

// let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum);

// DATE
// let now = new Date();
// console.log(now);

// console.log(now.toDateString());
// console.log(now.toLocaleDateString());

// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(Date.now());

// let hour = new Date().getHours();
// hour = 19;
// console.log(hour);

// if (hour < 12) {
//   console.log('Good morning');
// } else if (hour < 18) {
//   console.log('Good afternoon');
// } else {
//   console.log('Good evening');
// }

// ARRAY OBJECTS
// let fruits = ['Apple', 'Banana', 'Cherry'];
// fruits.push('Orange');

// fruits.pop();

// console.log(typeof fruits);

// console.table(fruits);

// DESTRUCTURING
// const array = [1, 2, 3, 4, 5];

// const [a, b, c] = array;
// console.log(a);
// console.log(b);
// console.log(c);

// const [first, , third] = [1, 2, 3, 4];
// console.log(first);
// console.log(third);

const person = {
  name: 'Alice',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'New York',
    zipcode: 10001,
    country: 'USA',
  },
};

// console.log(person.name);

// const { name, age } = person;
// // const { age } = person;
// console.log(name);
// console.log(age);

// const { name: fullName } = person;
// console.log(fullName);

// const { name: n, country = 'Unknowon' } = person;
// console.log(n);
// console.log(country);

// console.log(person);

// const {
//   address: { street, zipcode },
// } = person;

// console.log(street);
// console.log(zipcode);

// function greet(name, age) {
//   console.log(`Hello, my name is ${name} and I am ${age} years old`);
// }

// // greet('John', 34);

// function greet({ name, age }) {
//   console.log(`Hello, my name is ${name} and I am ${age} years old`);
// }

// greet(person);

// const products = [
//   {
//     id: 1,
//     title: 'Keyboard',
//     price: 49.99,
//   },
//   {
//     id: 2,
//     title: 'Mug',
//     price: 9.99,
//   },
//   {
//     id: 3,
//     title: 'Notebook',
//     price: 4.99,
//   },
// ];

// function displayProduct({ title, price }) {
//   console.log(`${title} - ${price}`);
// }

// products.forEach((product) => console.log(product.price));
// products.forEach(displayProduct);
