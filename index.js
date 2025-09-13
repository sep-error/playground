//Part 1
import { add, multiply } from './modules/mathUtils.js';
import { students } from './modules/students.js';
//Part 2
import { getRandomLeader } from './modules/team.js';
//Part 3
import { divide, Subtraction } from './modules/mathUtils.js';

//part 1
console.log("Add:", add(2, 3));          
console.log("Multiply:", multiply(4, 2)); 

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

//Part 2
const leader = getRandomLeader();
console.log(`Team leader is ${leader.name}, who loves ${leader.language}`);

//Part 3
console.log("Division:", divide(4, 2)); // 8
console.log("Subtraction:", Subtraction(8, 2)); // 8