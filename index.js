import { add, multiply } from './midterm-js-jeanrenediego/mathUtils.js';

console.log("Add:", add(2, 3));        // 5
console.log("Multiply:", multiply(4, 2)); // 8

import { students } from './midterm-js-jeanrenediego/students.js';

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});