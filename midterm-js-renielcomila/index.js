import { add, multiply } from './mathUtils.js';
import { students } from './students.js';

console.log("Add:", add(2, 3));        // Output: 5
console.log("Multiply:", multiply(4, 2)); // Output: 8

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});