// importing types
import type { Person } from "./types/types";
import type { IPerson, IStudent, ITeacher } from "./types/interfaces";

const firstName: string = "John";
let age: number | undefined;
let isStudent: boolean = true;

age = 22

// Tuple
const stringTuple: [string, string, string] = ["Hellor", "Goodbye", "Hi"];
stringTuple[0] = "Good Morning"

let mixedTuple: [number, string, boolean];
mixedTuple = [22, "Hi", true];
// mixedTuple = ["Hi", 22, true];

// Array
const numberArray: number[] = [1,2,3,4,5]
const stringsArray: string[] = ['Hellor', 'Goodbye', 'Hi'];

const mixedArray: Array<number | string | boolean> = [1, 3, 5, "hello", true]

// objects
const person: {
    name: string,
    age: number,
    isStudent: boolean
} = {
    name: "John Smith",
    age: 44,
    isStudent: false
}

const person2: Person = {
    name: "Alice",
    age: 35,
}

const user: IPerson = {
    firstName: "Mario",
    lastName: "Smith",
    age: 22,
    role: "admin",
    address: {
        street: {
            name: "Gartenstr.",
            number: 33
        },
        postalcode: 33333,
        city: "Berlin"
    },
}

const student: IStudent = {
  firstName: 'Mario',
  lastName: 'Smith',
  age: 22,
  currentlyStudent: true,
  role: "student",
  address: {
    street: {
      name: 'Gartenstr.',
      number: 33,
    },
    postalcode: 33333,
    city: 'Berlin',
  },
  subjects: ['Math', 'English', 'Biology'],
};

const teacher: ITeacher = {
  firstName: 'Mario',
  lastName: 'Smith',
  age: 22,
  role: 'teacher',
  address: {
    street: {
      name: 'Gartenstr.',
      number: 33,
    },
    postalcode: 33333,
    city: 'Berlin',
  },
  bankInfo: {
    IBAN: "DE00000000",
    accountHolder: "Mario Smith"
  },
  subject: "English" 
};

// Functions
const greetConsole = (name: unknown): void => {
    console.log(`Hello ${name}`)
}

const greetReturn = (name?: string): string => {
    const safeName = name ?? "Guest";
    return `Hello ${safeName}`;
}
greetReturn("Maria")
greetReturn()
// greetReturn(33)


