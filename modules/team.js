
import { students } from './student.js'; 
export function getRandomLeader() {
  const index = Math.floor(Math.random() * students.length);
  return students[index];
}