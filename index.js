import { add, multiply } from './modules/mathUtils.js';

console.log("Add:", add(2, 3));          // 5
console.log("Multiply:", multiply(4, 2)); // 8

import { students } from './modules/students.js';

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

import { getRandomLeader } from './modules/team.js';

const leader = getRandomLeader();
console.log(`Team leader is ${leader.name}, who loves ${leader.language}`);