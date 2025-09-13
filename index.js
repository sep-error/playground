import { students } from './modules/students.js';
import { add, multiply } from './modules/mathUtils.js';
import { getRandomLeader } from './modules/team.js';
import { tasks } from './modules/tasks.js';
import { grades } from './modules/grades.js';

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

console.log("Add:", add(2, 3));           // 5
console.log("Multiply:", multiply(4, 2)); // 8

const leader = getRandomLeader();
console.log(`Team leader is ${leader.name}, who loves ${leader.language}`);

tasks.forEach(t => {
  console.log(`${t.student} is assigned: ${t.task}`);
});

grades.forEach(g => {
  console.log(`${g.student} received grade: ${g.grade}`);
});
