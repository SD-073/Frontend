// ============================================================
// 1. SAVING & READING — setItem / getItem
// ============================================================

localStorage.setItem('username', 'John'); // saves a string
localStorage.setItem('theme', 'dark');

console.log(localStorage.getItem('username')); // 'John'
console.log(localStorage.getItem('theme')); // 'dark'

// ============================================================
// 2. REMOVING — removeItem / clear
// ============================================================

localStorage.removeItem('username'); // removes only 'username'
localStorage.clear(); // removes everything

// ============================================================
// 3. THE PROBLEM — localStorage only stores strings!
// ============================================================

const myArray = [1, 2, 3, 4];
localStorage.setItem('myArray', myArray); // ❌ saves as "1,2,3,4" — not an array!
console.log(localStorage.getItem('myArray')); // "1,2,3,4" — useless string

// ============================================================
// 4. THE SOLUTION — JSON.stringify to save, JSON.parse to read
// ============================================================

// what does JSON.stringify actually do?
const person = { name: 'Alice', age: 25, city: 'Berlin' };
console.log('JS object:', person); // { name: 'Alice', age: 25 }
console.log('JSON string:', JSON.stringify(person)); // '{"name":"Alice","age":25}'

// saving correctly
localStorage.setItem('myArray', JSON.stringify([1, 2, 3, 4]));
localStorage.setItem('myObject', JSON.stringify({ name: 'John', age: 30 }));

// reading correctly
const storedArray = JSON.parse(localStorage.getItem('myArray'));
console.log(storedArray); // [1, 2, 3, 4] — real array again
console.log(storedArray[0]); // 1

const storedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(storedObject); // { name: 'John', age: 30 } — real object again
console.log(storedObject.name); // 'John'

// ============================================================
// 5. ADDING TO AN EXISTING ARRAY — spread operator
// ============================================================

localStorage.setItem('myArray', JSON.stringify([1, 2, 3, 4]));

// get existing array (or empty array if nothing stored yet)
const existingArray = JSON.parse(localStorage.getItem('myArray')) || [];
console.log('before:', existingArray); // [1, 2, 3, 4]

// add new items using spread operator
const newArray = [...existingArray, 5, 6, 7];
localStorage.setItem('myArray', JSON.stringify(newArray));

console.log('after:', JSON.parse(localStorage.getItem('myArray'))); // [1, 2, 3, 4, 5, 6, 7]
