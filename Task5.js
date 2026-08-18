//Task1
const name = "Haritha";
let age = "24";
let department = "ECE";
let cgpa = "6.5";
//normal concatenation
console.log("name:",name);
console.log("age:",age);
console.log("department:",department);
console.log("cgpa:",cgpa);
//template literals
console.log(`name: ${name}`);
console.log(`age: ${age}`);
console.log(`department: ${department}`);
console.log(`cgpa: ${cgpa}`);
//Task2
a =20;
b=10;
console.log("addition:", a+b);
console.log("sub:", a-b);
console.log("mul:", a*b);
console.log("division:",a/b);
console.log("modolus:",a%b);
console.log("power:",a**b);
//Task3
let age = prompt(Number("Enter your age:"));
if(age >=18){
  console.log("Eligible to vote");
}else{
console.log("Not eligible");
}
//Task4
let marks = prompt(Number("Enter your marks:"));
if( marks >=90 && marks<=90){
console.log("A");
}else if (marks >=80){
  console.log("B");
}else if (marks>=70){
  console.log("C");
}else if(marks >=60){
  console.log("D");
}else{
  console.log("Fail");
}
//Task5
let correctUsername = "admin";
let correctPassword = "1234";
let username = prompt("Enter username:");
let password = prompt("Enter password:");
if (username === correctUsername && password === correctPassword) {
    console.log("Login successful");
} else if (username !== correctUsername && password === correctPassword) {
    console.log("Invalid username");
} else if (username === correctUsername && password !== correctPassword) {
    console.log("Invalid password");
} else {
    console.log("Invalid credentials");
}
//Task6
let balance = 10000;
let withdrawal = Number(prompt("Enter withdrawal amount:"));
if (withdrawal <= 0) {
    console.log("Amount must be greater than 0");
} else if (withdrawal > balance) {
    console.log("Insufficient balance");
} else if (withdrawal % 100 !== 0) {
    console.log("Amount must be a multiple of 100");
} else {
    balance = balance - withdrawal;
    console.log("Withdrawal successful");
    console.log("Remaining balance:", balance);
}
//Task7
let num = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
 console.log(`${num} x ${i} = ${num * i}`);
}
//Task8
let num = Number (prompt("Enter a number:"));
let reverse = 0;
while(num>0){
  let digit = num % 10;
  reverse = reverse *10+ digit;
  num = Math.floor(num/10);
}
console.log("reverse:", reverse);
//Task9
let correctOTP = 1234;
let attempts=0;
 while(attempts<3){
   let otp = Number(prompt("Enter your otp:"));
   if (otp === correctOTP){
     console.log("OTP is verified");
     break;
   } else {
     attempts ++;
     console.log("Try again");
   }
 }
if (attempts === 3 ){
  console.log("Account blocked");
}
//Task10
function calculateSalary(basicSalary,bonus){
return basicSalary+bonus;
}
let result = calculateSalary(30000,5000);
console.log(result);
//Task11
function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}
console.log("Addition:" ,add(20,20));
console.log("subtract:" ,subtract(20,20));
console.log("multiplication:", multiply(20,20));
console.log("division:", divide(20,20));
//Task12
function checkEligibility  (age,height,weight){
if (age >=21 && height>=170 && weight >=70){
  return("Eligibile")
} else{
  return("Not eliginle");
}
}
console.log(checkEligibility(25,175,75));
console.log(checkEligibility(20,174,75));
//Task13
let cart = ["Laptop", "Mouse", "Keyboard"];
cart.push("Monitor");
cart.splice(1, 1);
cart.unshift ("Headphones");
console.log(cart);
//Task14
let numbers = [10,45,23,89,12,67];
let maximum = Math.max(...numbers)
console.log(maximum);
//Task15
let numbers = [1,2,3,2,4,1,5];
let  Uniquevalues = [...new set (numbers)];
console.log( Uniquevalues);
//Task16
let employees=[
    {name:"arun", salary:30000},
    {name:"bala", salary:50000},
    {name:"kumar", salary:25000},
    {name:"ravi", salary:70000}
];
let result=employees.filter(function(employee){
    return employee.salary>40000;
});
console.log(result);
//Task17
let employees=[
    {name:"arun", salary:30000},
    {name:"bala", salary:50000},
    {name:"kumar", salary:25000},
    {name:"ravi", salary:70000}
];
let updatedEmployees=employees.map(function(employee){
    if(employee.salary<40000){
        employee.salary=employee.salary+5000;
    }   else {
        employee.salary=employee.salary+10000;
    }
  return employee;
});
console.log(updatedEmployees);
//Task18
let employees = [
    {name: "Arun", salary: 30000},
    {name: "Bala", salary: 50000},
    {name: "Kumar", salary: 25000},
    {name: "Ravi", salary: 70000}
];
let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);
console.log(totalSalary);
//Task19
let employees = [
    {name: "Arun", salary: 30000},
    {name: "Bala", salary: 50000},
    {name: "Kumar", salary: 25000},
    {name: "Ravi", salary: 70000}
];
let highSalary = employees.some(function(employee) {
    return employee.salary > 100000;
});
let minimumSalary = employees.every(function(employee) {
    return employee.salary >= 20000;
});
console.log(highSalary);
console.log(minimumSalary);

//Mini project-Employee Management
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000
    }
];               
// 1. Print all employee names using forEach()
employees.forEach(function(employee) {
    console.log(employee.name);
});
// 2. Get only IT employees using filter()
let itEmployees = employees.filter(function(employee) {
    return employee.department === "IT";
});
console.log(itEmployees);
// 3. Increase every salary by 10% using map()
let increasedSalary = employees.map(function(employee) {
    return {
        ...employee,
        salary: employee.salary * 1.10
    };
});
console.log(increasedSalary);
// 4. Find employee with salary ₹45000 using find()
let employee45000 = employees.find(function(employee) {
    return employee.salary === 45000;
});
console.log(employee45000);
// 5. Calculate total salary using reduce()
let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);
console.log(totalSalary);
// 6. Check whether anyone earns above ₹50000 using some()
let above50000 = employees.some(function(employee) {
    return employee.salary > 50000;
});
console.log(above50000);
// 7. Check whether everyone earns above ₹20000 using every()
let above20000 = employees.every(function(employee) {
    return employee.salary > 20000;
});
console.log(above20000);
// 8. Sort employees by salary highest → lowest
let sortedEmployees = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});
console.log(sortedEmployees);
// 9. Destructure each employee's name and salary
employees.forEach(function(employee) {
    let { name, salary } = employee;

    console.log(name, salary);
});
// 10. Use spread operator to create a new employee list
let newEmployees = [...employees];
console.log(newEmployees);

  
  






   
