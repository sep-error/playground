import { students } from './modules/students.js';
import { add, Division, multiply, Subtraction } from './modules/mathUtils.js';

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

console.log("Add:", add(2, 3));          // 5
console.log("Multiply:", multiply(4, 2)); // 8
console.log("Division:", Division(4, 2)); // 8
console.log("Subtraction:", Subtraction(8, 2)); // 8

