import { add, multiply } from './modules/mathUtils.js';

console.assert(add(2, 3) === 5, "Add failed!");
console.assert(multiply(2, 4) === 8, "Multiply failed!");
console.log("All tests passed!");