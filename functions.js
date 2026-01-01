// Function declaration
function square(x) {
  return x * x;
}

// Arrow function :functions using =>, with simpler handling of this.
const add = (a, b) => a + b;

// Default parameter
function greet(name = "Guest") {
  console.log("Hello", name);
}

// Closure & higher-order function
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

// Callback:function passed as an argument to another function to be executed later.
function showResult(value, callback) {
  callback(value);
}

// IIFE:runs immediately after it is defined without being called explicitly.
(function () {
  console.log("IIFE executed");
})();

// Usage
greet();
console.log(square(4));
console.log(add(2, 3));

const double = multiplier(2);
showResult(double(5), console.log);
