import { add, multiply } from './modules/mathUtils.js';
import { students } from './modules/students.js';
import { getRandomLeader } from './modules/team.js';

console.log("Add:", add(2, 3));          
console.log("Multiply:", multiply(4, 2)); 


students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});
