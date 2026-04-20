class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound!`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  speak(): void {
    console.log(`${this.name} the ${this.breed} barks!`);
  }
}

class Cat extends Animal {
  speak(): void {
    console.log(`${this.name} meoows!`);
  }
}

const dog = new Dog('Doggo', 'Labrador');
// const cat = new Dog('Cat');

dog.speak();
// cat.speak();
