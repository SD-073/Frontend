// class Student {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(): void {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// }

// class Teacher {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(): void {
//     console.log(`Hi, I'm ${this.name}`); // duplicate
//   }
// }

// const s1 = new Student('Alice');
// const t1 = new Teacher('Bob');

// s1.greet();
// t1.greet();

// abstract class Person {
//   constructor(public name: string) {}

//   abstract getRole(): string;

//   greet(): void {
//     console.log(`Hi, I'm ${this.name} and I'm a ${this.getRole()} `);
//   }
// }

// class Student extends Person {
//   getRole(): string {
//     return 'student';
//   }
// }

// class Teacher extends Person {
//   getRole(): string {
//     return 'teacher';
//   }
// }

// const alice = new Student('Alice');
// const bob = new Teacher('Bob');
// const person = new Person('Charlie'); // ❌ not possible => Abstract class

// alice.greet();
// bob.greet();

interface Greetable {
  name: string;
  greet(): void;
}

interface Drawable {
  draw(): void;
}

class Person implements Greetable, Drawable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name}`);
  }

  draw(): void {
    console.log('drawing a circle');
  }
}

const alice = new Person('Alice');
// alice.greet();
// alice.draw();
