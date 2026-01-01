// Variables
let id: number = 101;
let course: string = "MCA";
let isActive: boolean = false;

// Type inference
let city = "Pune";

// Type Alias
type Student = {
  name: string;
  rollNo: number;
};

// Interface
interface College {
  collegeName: string;
  location: string;
}

// Objects
let student: Student = { name: "Sakshi", rollNo: 12 };
let college: College = { collegeName: "SPPU", location: "Pune" };

// Function
function getStatus(active: boolean): string {
  return active ? "Active" : "Inactive";
}

// Arrow Function
const multiply = (a: number, b: number): number => a * b;

// Output
console.log(id, course, isActive);
console.log(city);
console.log(getStatus(true));
console.log(multiply(4, 5));
console.log(student, college);
