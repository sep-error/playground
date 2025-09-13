import { add, multiply } from './modules/mathUtils.js';
import { students } from './modules/students.js';
import { grades } from './modules/grades.js';


console.log("Add:", add(2, 3));           // 5
console.log("Multiply:", multiply(4, 2)); // 8

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

console.log('Grades:', grades);
