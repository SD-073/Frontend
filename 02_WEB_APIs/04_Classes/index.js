// const alice = { name: 'Alice', age: 30 };
// const bob = { name: 'Bob', age: 30 };

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.describe = function () {
//     return `${this.name} is ${this.age} years old`;
//   };
// }

// const alice = new Person('Alice', 30);
// const bob = new Person('Bob', 30);

// console.log(alice.describe());
// console.log(bob.describe());

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   describe() {
//     return `${this.name} is ${this.age} years old`;
//   }
// }

// const bob = new Human('Bob', 30);
// console.log(bob.describe());

// console.log(typeof Person);
// console.log(typeof Human);

// console.log(this);

// function show() {
//   console.log(this);
// }

// show();

// const obj = {
//   name: 'Alice',
//   age: 30,
//   greet: function () {
//     console.log(`Hello, ${this.name}, age: ${this.age}`);
//   },
// };

// obj.greet();

// const obj2 = {
//   name: 'Bob',
//   greet: () => {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// obj2.greet();

// const person1 = {
//   name: 'Ahmed',
//   hobbies: ['coding', 'reading', 'pingpong'],
//   listHobbies: function () {
//     this.hobbies.forEach((hobby) =>
//       console.log(`My name is ${this.name} and i like ${hobby}`),
//     );
//   },
// };

// // person1.listHobbies();

// const person2 = {
//   name: 'Kai',
//   hobbies: ['gaming', 'reading', 'coding'],
//   listHobbies: function () {
//     this.hobbies.forEach((hobby) => {
//       console.log(`My name is ${this.name} and i like ${hobby}`);
//     });
//   },
// };

// // person2.listHobbies();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const alice = new Person('Alice', 30);
// console.log(alice.name, alice.age);

class Character {
  #name;
  #health;
  #strength;

  constructor(name, health, strength) {
    this.#name = name;
    this.#health = health;
    this.#strength = strength;
  }

  getName() {
    return this.#name;
  }

  getHealth() {
    return this.#health;
  }

  takeDamage(damage) {
    this.#health -= damage;
    if (this.#health < 0) this.#health = 0;
  }

  attack(target) {
    target.takeDamage(this.#strength);
  }

  greet() {
    return `Hey there! Need a hero?`;
  }
}

class Wizard extends Character {
  #mana;

  constructor(name, health, strength, mana) {
    super(name, health, strength);
    this.#mana = mana;
  }

  castSpell(target) {
    if (this.#mana >= 10) {
      console.log(`${this.getName()} casts a spell!`);
      target.takeDamage(this.getHealth());
      this.#mana -= 10;
    } else {
      console.log(`${this.getName()} does not have enough mana!`);
    }
  }

  getMana() {
    return this.#mana;
  }

  greet() {
    return 'I can do magic!';
  }
}

const hero = new Character('Hero', 100, 10);
const wizard = new Wizard('Gandalf', 80, 5, 30);

// console.log(hero.getName());
// console.log(hero.getHealth());

hero.takeDamage(20);

// console.log(hero.getHealth());

const characters = [hero, wizard];

// characters.forEach((character) => console.log(character.getName()));

// wizard.castSpell(hero);
// console.log(hero.getHealth());

const myArray = [1, 2, 3, 4];
// console.log(myArray);

// console.log(typeof myArray);

class Student {
  #name;
  #bootcamp;

  constructor(name, bootcamp) {
    this.#name = name;
    this.#bootcamp = bootcamp;
  }

  intro() {
    return `Hi my name is ${this.name} and i study ${this.bootcamp}`;
  }
}

const alex = new Student('Alex', 'Software Development');
const grace = new Student('Grace', 'Software Development');
// console.log(alex);
// console.log(grace);
