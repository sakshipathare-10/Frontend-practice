//There are 5 types of conditional statements
let num = 10;

// if      :    single condition
if (num > 0)
     console.log("Positive");

// if...else  :true/false
if (num % 2 === 0) 
    console.log("Even");
else
     console.log("Odd");

// if...else if...else     :multiple conditions
if (num > 0) 
    console.log("Positive");
else if (num < 0) 
    console.log("Negative");
else 
    console.log("Zero");

// switch  : fixed choice
let day = 1;
switch (day) {
  case 1:
     console.log("Monday"); 
     break;
  case 2: 
  console.log("Tuesday");
   break;
  default: 
  console.log("Other Day");
}

// ternary  :  shortcut of if else
let result = (num > 5) ? "Greater than 5" : "5 or less";
console.log(result);
