// const students = ['Claus', 'Ahmed', 'Kai', 'Alex', 'Grace'];

// students.forEach(function (el, i) {
//   console.log(el, i);
// });

// students.forEach((el) => console.log(el));

// const numbers = [10, 20, 30];

// numbers.forEach((number, index, arr) => {
//   console.log(`Index: ${index}: ${number} = ${arr}`);
// });

// function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }

// const sayHi = (name) => {
//   console.log(`Hi, ${name}`);
// };

// sayHello('Claus');
// sayHi('Alex');

// const greet = (name) => {
//   console.log(`Hey, ${name}`);
// };

// const callWithName = (callback, name) => {
//   callback(name);
// };

// callWithName(greet, 'Bob');

// MAP
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map((number) => number * 2);

// console.log('Original numbers array:', numbers);
// console.log('New array with map:', doubled);

// const squares = numbers.map((number) => number * number);
// console.log(squares);

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 },
// ];

// const names = people.map((person) => person.name);
// console.log(names);

// FIND
// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.find((number) => number > 25);
// console.log('find method returns:', result);

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 },
// ];

// const bob = people.find((person) => person.name === 'Bob');
// console.log('original people array:', people);
// console.log(bob);

// FILTER
// const result2 = numbers.filter((number) => number > 25);
// console.log('filter method retunrs:', result2);

// const numbers = [1, 2, 3, 4, 5];

// const even = numbers.filter((number) => number % 2 === 0);
// console.log(even);

// console.log(5 % 2);
// console.log(12 % 2);

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 },
//   { name: 'Dave', age: 17 },
// ];

// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

// SOME
// const numbers = [1, 3, 5, 7, 8];
// const hasEven = numbers.some((number) => number % 2 === 0);

// console.log(hasEven);

// const hasMinor = people.some((person) => person.age < 18);
// console.log(hasMinor);

// const numbers = [2, 4, 6, 8, 10];
// const allEven = numbers.every((number) => number % 2 === 0);

// console.log(allEven);

// const allAdults = people.every((person) => person.age > 20);
// console.log(allAdults);

// REDUCE

// array.reduce((acc, current) => {...}, initialValue)

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, number) => acc + number, 0);
// console.log(sum);

/*
Start: acc = 0
Step 1: 0 + 1 => 1
Step 2: 1 +2 => 3
Step 3: 3 +3 => 6
Step 4: 6 + 4 => 10
Step 5: 10 + 5 => 15
*/

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 },
//   { name: 'Dave', age: 17 },
// ];

// const totalAge = people.reduce((acc, person) => acc + person.age, 0);

// const avarageAge = totalAge / people.length;

// console.log(avarageAge);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbers
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2);

// console.log(result);

// const adultNames = people
//   .filter((person) => person.age >= 18)
//   .map((person) => person.name);

// console.log(adultNames);

const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];

// FIND
// const product = products.find(
//   (product) =>
//     product.title ===
//     'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
// );

// console.log(product);

// MAP
// const productSummary = products.map((product) => ({
//   title: product.title,
//   price: product.price,
// }));

// console.log(productSummary);

// console.log(products);
