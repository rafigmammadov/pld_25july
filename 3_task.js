const students = [
  { name: 'Alice', grade: 85, passed: true },
  { name: 'Bob', grade: 70, passed: false },
  { name: 'Charlie', grade: 90, passed: true },
  { name: 'David', grade: 60, passed: false },
  { name: 'Eve', grade: 95, passed: true }
];
const firstNotPassed = students.find(student => !student.passed);
if (firstNotPassed) {
  console.log(`First student who has not passed: Name - ${firstNotPassed.name}, Grade - ${firstNotPassed.grade}`);
} else {
  console.log('All students have passed.');
}
const gradeThreshold = 70;
const hasHighGrade = students.some(student => student.grade > gradeThreshold);
console.log(`Is there at least one student with a grade above ${gradeThreshold}?`, hasHighGrade);
const allPassed = students.every(student => student.passed);
console.log('Have all students passed?', allPassed);
