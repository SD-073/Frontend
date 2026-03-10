// LOOPS
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let i = 6;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 10;

// do {
//   console.log(i);
// } while (i < 5);

// let friendList = ['Claus', 'Alex', 'Grace', 'Kai', 'Ahmed'];

// console.log(friendList.length);

// for (let i = 0; i < friendList.length; i++) {
//   console.log(`Hello, ${friendList[i]}, you are invited to my birthday!`);
// }

// CONTINUE & BREAK
// for (let i = 0; i < 20; i++) {
//   if (i === 5) break;

//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   if (i === 2) continue;
//   console.log(i);
// }

// ARRAYS
// let student1 = 'John';
// let student2 = 'Jane';
// let student3 = 'Bob';
// let student4 = 'Ben';

// let students = ['John', 'Jane', 'Bob', 'Ben'];

// console.log(student1);
// console.log(students[0]);
// console.log(students[2]);

// PUSH
// let students = ['John', 'Jane', 'Bob', 'Ben'];
// students.push('Onur');
// console.log(students.length);
// console.log(students);

// let fruits = ['Apple', 'Banana'];
// fruits.push('Cherry');

// console.log(fruits.length);
// console.log(fruits);

// POP
// let fruits = ['Apple', 'Banana', 'Cherry'];
// fruits.pop();

// console.log(fruits.length);
// console.log(fruits);

// SHIFT & UNSHIFT
// let students = ['John', 'Jane', 'Bob', 'Ben'];
// students.shift();

// console.log(students.length);
// console.log(students);

// let students = ['John', 'Jane', 'Bob', 'Ben'];
// students.unshift('Emily ');

// console.log(students.length);
// console.log(students);

// let messages = ['Hello', 'Goodbye'];
// messages.unshift('Good Morning');

// console.log(messages.length);
// console.log(messages);

// REVERSE & TOREVERSED
// let numbers = [1, 2, 3, 4];
// console.log('before reverse', numbers);

// numbers.reverse();

// console.log('after reverse', numbers);

// let numbers = [1, 2, 3, 4];
// console.log('before toReversed', numbers);

// let reversed = numbers.toReversed();
// console.log('toReversed new array:', reversed);

// console.log('after toReversed', numbers);

// let scores = [60, 70, 85, 92];

// let highToLow = scores.toReversed();

// console.log(highToLow);
// console.log('original scores array:', scores);

// CONCAT
// let fruits = ['Apple', 'Banana'];
// let veggies = ['Carrot', 'Broccoli'];

// let combined = fruits.concat(veggies);
// console.log(combined);

// console.log(fruits);
// console.log(veggies);

// let a = [1, 2];
// let b = [3, 4];
// let c = [5, 6];

// let all = a.concat(b, c);
// console.log(all);

// console.log(a);
// console.log(b);
// console.log(c);

// SPLICE & TOSPLICED
// let fruits = ['Apple', 'Banana', 'Cherry'];

// // array.splice(startindex, deleteCount, item1,item2,item3)

// fruits.splice(1, 1, 'Orange');

// console.log(fruits);

// let items = ['pen', 'eraser', 'ruler', 'pencil'];

// items.splice(1, 2, 'something', 'something else');
// console.log(items);

// let fruits = ['Apple', 'Banana', 'Cherry'];

// array.splice(startindex, deleteCount, item1,item2,item3)

// let updated = fruits.toSpliced(0, 3, 'Orange');

// console.log(fruits);
// console.log(updated);

// SLICE
// let fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];

// // array.slice(startindex, endIndex)

// let result = fruits.slice(0, 2);

// console.log(result);

// let letters = ['a', 'b', 'c', 'd', 'e'];

// let result2 = letters.slice();
// console.log(result2);

// JOIN
// let fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];
// console.log(fruits);

// console.log(fruits.join(', '));

// let students = ['Ben', 'Anna', 'Chris'];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// let numbers = [2, 4, 6];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] * 2);
// }

// FOREACH
// students.forEach(function (el, i) {
//   console.log(el, i);
// });

// students.forEach((el) => console.log(el));
