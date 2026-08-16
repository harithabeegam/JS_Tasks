//Task1
let salary = 30000;
let bonus =5000;
let tax = 2000;
let finalsalary= salary + bonus -tax ;
console.log(finalsalary); //33000
//Task2

//Predict output-
//12
//10
//12

//Task3
//Predict output
//false
//true
//false

//Task4
let balance =10000;
let withdrawal = 2500;
if(withdrawal <= 0){
  console.log("withdrawal must be greater than 0")
} else if (withdrawal>balance){
  console.log("Insufficient balance");
}else if (withdrawal % 100 !==0){
  console.log("withdrawal must be a multiple of 100");
}else {
  balance= balance-withdrawal;
  console.log("Withdrawal succussesful");
  console.log(" Remaining balance:",balance);
}
//Task5
let mark = 78;
if( mark >=90 && mark<=100){
console.log("A");
} else if (mark >= 80){
console.log("B");
} else if (mark>=70){
  console.log("C");
} else if(mark>=60){
  console.log("D");
} else{
  console.log("Fail");
}
  //Task6
for(let i=1;i<=10;i++)
    console.log(i);
//Task7
let num =7;
  for (let i=1;i<=10;i++)
    console.log(num + "x" + i + "=" + (num*i));
//Task8
let num =10;
while(num>=0){
  console.log(num);
  num--;
}
//Task10
let correctOTP= 1234;
let attempts = 1;
while(attempts <=3){
  let enteredOPT = Number(prompt("Enter OTP:"));
  if(enteredOPT===correctOTP){
    console.log("OTP verified");
    break;
  }else{
    console.log("wrong OPT");
    attempts++;
  }
}
if (attempts>3){
  console.log("Account blocked");
}
//Task11
let fruits = ["apple", "banana", "orange", "grapes", "mango"];
for (let fruit of fruits) {
 console.log(fruit);
}
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
//Task12
let employee = {
    name: "Haritha",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};
for (let key in employee) {
 console.log(key + " : " + employee[key]);
}
//Task14
function calculator(a, b, operator) {
 if (operator === "+") {
   return a + b;
} else if (operator === "-") {
 return a - b;
 } else if (operator === "*") {
   return a * b;
 } else if (operator === "/") {
 return a / b;
} else if (operator === "%") {
  return a % b;
    } else {
        return "Invalid operator";
    }
}
console.log(calculator(20, 5, "+"));
console.log(calculator(20, 5, "-"));
console.log(calculator(20, 5, "*"));
console.log(calculator(20, 5, "/"));
console.log(calculator(20, 5, "%"));
//Task15
function salaryDetails(salary, bonus) {
  let finalSalary = salary + bonus;
return finalSalary;
}
console.log(salaryDetails(40000, 5000));
//Task16
function employee(name, role = "Trainee") {
 console.log("Name:", name);
    console.log("Role:", role);
}
employee("Arun");
employee("Kamal", "Developer");
//Task17
function calculate(a, b, callback) {
    let result = a + b;
    console.log("Addition:", result);
   callback(a, b);
}
function add(a, b) {
    console.log("Add:", a + b);
}
function sub(a, b) {
    console.log("Sub:", a - b);
}
function mul(a, b) {
    console.log("Mul:", a * b);
}
calculate(20, 10, add);
calculate(20, 10, sub);
calculate(20, 10, mul);
//Task18
function* rewards() {
    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}
let reward = rewards();
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
//Task18
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];
let fullStack = [...frontend, ...backend];
console.log(fullStack);
//Task19
let student = ["Arun", "ECE", 8.5, "Developer"];
let [name, department, cgpa, role] = student;
console.log("Name:", name);
console.log("Department:", department);
console.log("CGPA:", cgpa);
console.log("Role:", role);
//Task20
let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
}
//Final challenge Mini project
let students = [
    {
      name: "Arun",
        department: "ECE",
        mark: 85
    }
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];

// 1. Print all students
function displayStudents() {
    console.log("All Students:");
    for (let student of students) {
        let { name, department, mark } = student;
        console.log(name, department, mark);
    }
}
// 2. Print only ECE students
function displayECEStudents() {
    console.log("ECE Students:");
    for (let student of students) {
        let { name, department, mark } = student;
        if (department === "ECE") {
            console.log(name, mark);
        }
    }
}
// 3. Students who scored above 80
function displayAbove80() {
    console.log("Students above 80:");
    for (let student of students) {
        let { name, mark } = student;
        if (mark > 80) {
            console.log(name, mark);
        }
    }
}

// 4. Calculate total marks
function calculateTotal() {
    let total = 0;
    for (let student of students) {
        total = total + student.mark;
    
    return total;
}
// 5. Calculate average
function calculateAverage() {
    let total = calculateTotal();
    let average = total / students.length;
    return average;
}

// 6. Highest mark
function highestMark() {
    let highest = students[0].mark;
    for (let student of students) {
        if (student.mark > highest) {
            highest = student.mark;
        }
    }
    return highest;
}

// 7. Lowest mark
function lowestMark() {
    let lowest = students[0].mark;
    for (let student of students) {
        if (student.mark < lowest) {
            lowest = student.mark;
        }
    }
    return lowest;
}
// Calling the functions
displayStudents();
displayECEStudents();
displayAbove80();
console.log("Total Marks:", calculateTotal());
console.log("Average:", calculateAverage());
console.log("Highest Mark:", highestMark());
console.log("Lowest Mark:", lowestMark());
