const book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281,
  isRead: true,

  summary: function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? 'Yes' : 'No'}`;
  },
};

// const condition = false;

// if (condition) {
//   console.log('condiiton is true');
// } else {
//   console.log('condiiton is false');
// }

// condition ? console.log('condition true') : console.log('condition false');

// console.log(book.summary());
// console.log('Its me again, NodeJS!');

// DESTRUCTURING
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

// let fruit1 = fruits[0];
// let fruit2 = fruits[1];

// console.log(fruit1);
// console.log(fruit2);

const [fruit1, fruit2] = fruits;

// console.log(fruit1);
// console.log(fruit2);

const [something1, something2] = fruits;

// console.log(something1, something2);

const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit);
console.log(thirdFruit);

const { name, age } = person;
console.log(name);
console.log(age);

const {
  address: { city },
} = person;

console.log(person.address.city);
console.log(city);

// function displayPerson(person) {
//   console.log(`Name: ${person.name}, Age: ${person.age}`);
// }

// HOISTING : https://developer.mozilla.org/de/docs/Glossary/Hoisting
displayPerson(person);

function displayPerson({ name, age }) {
  console.log(name);
  console.log(age);
}

// const displayPersonFunction = function ({ name, age }) {
//   console.log(name);
//   console.log(age);
// };

// displayPersonFunction(person);
