// const math = require('./math'); CommonJS
// console.log(math.add(2, 3)); // 5

import { add, greeting, subtract, greet } from './modules/index.js';

console.log(add(2, 3));
console.log(subtract(5, 3));
console.log(greeting);
console.log(greet('Ahmed'));
