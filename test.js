//Part 3

import { add, multiply, divide, Subtraction } from './modules/mathUtils.js';

console.assert(add(2, 3) === 5, "Add failed!");
console.assert(multiply(2, 4) === 8, "Multiply failed!");
console.assert(divide(4, 2) === 2, "Division failed!");
console.assert(Subtraction(8, 2) === 6, "Subtraction failed!");

console.log("All tests passed!");