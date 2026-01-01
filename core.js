// ES6 variables:modern syntax
const course = "JavaScript";

// Array:stores multiple values
let marks = [60, 75, 80, 90];

// Object:stores data in key:value
let student = {
  name: "Amit",
  course,
  marks
};

// Loop + forEach:loop through array
marks.forEach(m => console.log(m));

// Array methods
let passed = marks.filter(m => m >= 70);  //select data
let total = marks.reduce((sum, m) => sum + m, 0);//calculate single value

// String method:modify text
let title = " core js ";
let result = title.trim().toUpperCase();

// Function
const getResult = (name, total) => `Student ${name} scored ${total}`;

// Spread operator
let updatedMarks = [...marks, 85];

// Output
console.log(student.name);     // Object
console.log(passed);           // filter
console.log(total);            // reduce
console.log(result);           // string
console.log(getResult(student.name, total)); // function
console.log(updatedMarks);     // spread
