// // let a = 5;
// // let b = 10;

// // console.log('The sum is:', a + b);

// // process.argv[0] => path to the NodeJS
// // process.argv[1] => path to the JS File we are running
// // process.argv[2] our first argument
// // process.argv[3] our second argument...

// // console.log(process.argv[0]);
// // console.log(process.argv[1]);
// // console.log(process.argv[2]);
// // console.log(process.argv[3]);
// // console.log(process.argv[4]);

// const args = process.argv.slice(2);

// console.log(args);

// const num1 = parseFloat(args[0]);
// const num2 = parseFloat(args[1]);

// console.log(num1, num2);

// console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);

const userChoice = process.argv[2].toLowerCase();
console.log('Player choice', userChoice);

const options = ['rock', 'paper', 'scissors'];

if (!options.includes(userChoice)) {
  console.log('invalid choice! please choose rock, paper or scissors');
}

const randomIndex = Math.floor(Math.random() * 3);
const computerChoice = options[randomIndex];
console.log('Computer choice', computerChoice);

// STEP who won? determine winner?
