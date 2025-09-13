import { add, multiply } from './modules/mathUtils.js';

console.log("Add:", add(2, 3));          // 5
console.log("Multiply:", multiply(4, 2)); // 8

import { students } from './modules/student.js'; 

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

import { getRandomLeader } from './modules/team.js';
console.log("Random Leader:", getRandomLeader().name);

import { tasks } from './modules/tasks.js';
console.log("Tasks:", tasks);

import { calculateGrade } from './modules/grades.js';  // Added demo
console.log("Grade for 85:", calculateGrade(85));  // A
console.log("Grade for 75:", calculateGrade(75));  // B