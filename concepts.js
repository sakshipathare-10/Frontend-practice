// Array & Object
let nums = [1, 2, 3];
let user = { name: "sakshi", age: 22 };

// Array methods
let squares = nums.map(n => n * n);

// String method
let msg = " Hello JS ";
console.log(msg.trim());

// Destructuring:extract 
let [a, b] = nums;

// Spread: copy
let newNums = [...nums, 4];

// Function & Closure:reusable logic
function counter() {
  let count = 0;
  return () => ++count;
}
let inc = counter();

// Async & Promise:non-blocking code
function getData() {
  return new Promise(res => setTimeout(() => res("Done"), 1000));
}

// Async/Await
async function show() {
  try {
    console.log(await getData());
  } catch (e) {
    console.log("Error");
  }
}
show();

// Prototype:inheritance
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log("Hi " + this.name);
};
new Person("sakshi").greet();

// Event Loop:async execution
console.log("Start");
setTimeout(() => console.log("Async"), 0);
console.log("End");

// Output 
console.log(squares, a, b, newNums, inc());
