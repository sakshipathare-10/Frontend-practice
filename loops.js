//loops are used to execute a block of code repeatedly until a condition becomes false.
// for loop – Used when the number of iterations is known. 
// while loop – Used when the number of iterations is unknown. 
// do...while loop – Similar to while, but runs at least once. 
// for...in loop – Loops over object properties. 
// for...of loop – Loops over iterable objects like arrays. 

//example
// for loop
for (let i = 1; i <= 3; i++)
  console.log( i);

// while loop
let j = 1;
while (j <= 3) {
  console.log(j);
  j++;
}

// do...while loop
let k = 1;
do {
  console.log( k);
  k++;
} while (k <= 3);

// for...of loop
let arr = ["A", "B", "C"];
for (let val of arr)
  console.log( val);

// for...in loop
let obj = { name: "Sakshi", age: 22 };
for (let key in obj)
  console.log(key);


//break → exits the loop

//continue → skips current iteration

//Infinite loop → runs endlessly if condition is always true
// break example
for (let i = 1; i <= 3; i++) {
  if (i === 2) 
    break;
  console.log("Break:", i);
}
// continue example
for (let i = 1; i <= 3; i++) {
  if (i === 2)
     continue;
  console.log("Continue:", i);
}

// infinite loop (controlled to stop)
let count = 1;
while (true) {
  console.log("Infinite:", count);
  if (count === 2) 
    break; // stops infinite loop
  count++;
}
