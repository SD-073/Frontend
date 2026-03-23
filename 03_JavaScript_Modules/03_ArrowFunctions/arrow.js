// function double(x) {
//   return x * 2;
// }

// console.log(double(10));

// const double1 = x => x * 2;
// const double2 = (x) => x * 2;

// console.log(double2(10));

// function sayHello(name) {
//   return new Date().getHours() < 12
//     ? `Good morning, my name is ${name}`
//     : `Good afetnoon, my name is ${name}`;
// }

// const sayHelloArrow = (name) =>
//   new Date().getHours() < 12
//     ? `Good morning, my name is ${name}`
//     : `Good afetnoon, my name is ${name}`;

// console.log(sayHello('Alex'));
// console.log(sayHelloArrow('Grace'));

// const instructor = {
//   name: 'Robin',
//   skills: ['html', 'css', 'javaScript'],
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   },

//   teach() {
//     this.skills.forEach(function (skill) {
//       console.log(
//         `I am ${this.name} and I'll teach you ${skill.toLocaleUpperCase()}`,
//       );
//     });
//   },
// };

// instructor.sayHello();
// instructor.teach();

// const instructor2 = {
//   name: 'Maria',
//   skills: ['html', 'css', 'javaScript'],
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   },

//   teach() {
//     this.skills.forEach((skill) => {
//       console.log(
//         `I am ${this.name}, and I'll teach you ${skill.toUpperCase()}`,
//       );
//     });
//   },
// };

// instructor2.sayHello();
// instructor2.teach();

// const instructor = {
//   name: 'Robin',
//   skills: ['html', 'css', 'javascript'],
//   teach() {
//     const copyOfThis = this;
//     this.skills.forEach(function (skill) {
//       console.log(
//         `I'm ${copyOfThis.name} and I'll teach you ${skill.toUpperCase()}`,
//       );
//     });
//   },
// };

// instructor.teach();

// const instructor = {
//   name: 'Robin',
//   skills: ['html', 'css', 'javascript'],

//   teach() {
//     this.skills.forEach(
//       function (skill) {
//         console.log(
//           `I'm ${this.name}, and I'll teach you ${skill.toUpperCase()}`,
//         );
//       }.bind(this),
//     );
//   },
// };

// instructor.teach();
const Person = (name) => {
  this.name = name;
};

const alice = new Person('Alice');
