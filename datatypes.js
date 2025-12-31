// Types of Datatypes:  1.Primitive datatypes

// 1. Number:Used to store numeric values.
let age = 22;
let price = 199.99;

// 2. String:to store textual data as a sequence of characters enclosed in quotes.
let firstName = "Sakshi";
let course = 'MCA';
let intro = `My name is ${firstName} and I study ${course}`;

// 3. Boolean:either true or false
let isStudent = true;
let isGraduated = false;

// 4. Undefined:declared but not assigned
let result;

// 5. Null:absence of any value.
let address = null;

// 6. Symbol:create unique and immutable values
let id1 = Symbol("id");
let id2 = Symbol("id");

// 7. BigInt:very large integers
let bigNumber = 12345678901234567890n;

console.log("Number:", age, price);
console.log("String:", firstName, course);
console.log("desc:", intro);
console.log("Boolean:", isStudent, isGraduated);
console.log("Undefined:", result);
console.log("Null:", address);
console.log("Symbol Comparison:", id1 === id2);
console.log("BigInt:", bigNumber);

// Type Checking
console.log(typeof age);        
console.log(typeof firstName);  
console.log(typeof isStudent);  
console.log(typeof result);     
console.log(typeof address);    
console.log(typeof id1);        
console.log(typeof bigNumber);  
 
//2.Non primitive datatypes:
// 1. Object

let student = {
  name: "Sakshi",
  rollNo: 115,
  course: "MCA"
};
console.log(student.course); 

// 2. Array
let subjects = ["Java", "JavaScript", "Python"];
console.log(subjects[2]); 

// 3. Function
function calculate(num) {
  return num * num;
}
console.log(calculate(5)); 

// 4. Date
let examDate = new Date("2025-12-10");
console.log(examDate);

// 5. Regular Expression
let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
console.log(emailPattern.test("student@gmail.com")); 
