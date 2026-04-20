class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
}

const alice = new Person('Alice', 25);
// alice.greet();

class Book {
  readonly title: string;
  author?: string;

  constructor(title: string, author?: string) {
    this.title = title;
    this.author = author;
  }
}

const myBook = new Book('A Bear Called Paddington', 'Test');
// myBook.title = 'Other';
// console.log(myBook);

class BankAccount {
  private balance: number;
  public owner: string;

  constructor(owner: string, initialBalance: number) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  getBalance(): number {
    return this.balance; // accessible inside the class!
  }
}

const acc = new BankAccount('Alice', 1000);
console.log(acc.getBalance());
// console.log(acc.balance);
