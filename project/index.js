import { students } from './modules/students.js';
import { getRandomLeader } from './modules/team.js';
import { tasks } from './modules/tasks.js';
import { grades } from './modules/grades.js';

console.log("Students:", students);
console.log("Team Leader:", getRandomLeader());
console.log("Tasks:", tasks);
console.log("Grades:", grades);