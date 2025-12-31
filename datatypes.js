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
