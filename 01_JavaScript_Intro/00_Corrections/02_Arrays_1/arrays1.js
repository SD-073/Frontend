// ----------------  Initialisation ----------------
// Create an array called myArray containing in order: 42, "Hello, world!", true, 3.14, "JavaScript".
// const myArray = [42, 'Hello World!', true, 3.14, 'JavaScript'];

// Use console.log to print the array to the console.
// console.table(myArray);

// Access and print each element of the array individually using its index.
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

// Bonus points if you use a for loop!
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// myArray.forEach((el) => console.log(el));

// Modify an Array Element:
// Change the value of the second element (index 1) to "Changed value", and print the array again

// myArray[1] = 'Changed Value';
// console.table(myArray);

// ---------------- 1 PUSH & POP ----------------
// Initialize an array with initial values
// const myArray = [1, 2, 3, 4, 5];
// console.log('Original myArray:', myArray);

// Use the .push method to add the values 6 and 7 to the end of the array.
// myArray.push(6, 7);

// Remove the Last Element from the Array
// myArray.pop();
// console.log(myArray);

// ---------------- 2 SHIFT & UNSHIFT ----------------
// Remove the First Element from the Array
// myArray.shift();

// Use the .unshift method to add the values 0 and -1 to the beginning of the array.
// myArray.unshift(-2, -1, 0);
// console.log(myArray);

// ---------------- 3 REVERSE ----------------
// reverse() => verändert das Original-Array
// toReverse() => erstellt eine neue, umgekehrte Version

// const array1 = [1, 2, 3, 4, 5];
// const array2 = ['a', 'b', 'c', 'd', 'e'];

// console.log('Original array1:', array1);

// const reversedArray = array1.reverse();
// console.log('Original array1 after reverse:', array1);

// const toReversedArray = array2.toReversed();
// console.log('Original after toReversed:', array2);
// console.log(toReversedArray);

// ---------------- 4 SPLICE ----------------
// array.splice(start, deleteCount, item1, item2, ...)
// const array1 = [10, 20, 30, 40, 50];

// Remove the element at index 2 and add 35 and 36:
// array1.splice(2, 1, 35, 36);
// console.log(array1);

// const array2 = ['x', 'y', 'z'];
// console.log('Original array2:', array2);
// Remove the element at index 1 and add b and c with toSpliced

// const modifiedArray2 = array2.toSpliced(1, 1, 'a', 'b', 'c');
// console.log('Array2 after toSpliced', array2);
// console.log(modifiedArray2);

// ---------------- 5 SLICE ----------------
// const array = [2, 4, 6, 8, 10, 12, 14, 16];
// Use the slice method to extract different portions of the array.

// const slicedArray = array.slice(1, 4);
// const slicedArray = array.slice(4, 6);
// console.log(slicedArray);

// ---------------- 6 JOIN ----------------
// const array = ['apple', 'banana', 'cherry', 'date'];
// console.log(array);
// // Use the join method to create different strings by joining the array elements with various delimiters.
// const defaultJoin = array.join();
// console.log(defaultJoin);

// const dashJoin = array.join('-');
// console.log(dashJoin);

// const spaceJoin = array.join(' ');
// console.log(spaceJoin);

// const andJoin = array.join(' and ');
// console.log(andJoin);

// const coolJoin = array.join(', ');
// console.log(coolJoin);

// ---------------- 7 LOOPS ----------------
// const numberArray = [10, 20, 30, 40, 50];

// Iterate Over the Array with a for Loop:
// for (let i = 0; i < numberArray.length; i++) {
//   console.log(numberArray[i]);
// }

// Iterate Over the Array with a for...of Loop:
// for (const element of numberArray) {
//   console.log(element);
// }

// numberArray.forEach((el, i, arr) => console.log(el, i, arr));
