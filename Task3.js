//Task1
let employeeName = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let Experience = Number(prompt("Enter your Experience:"));
let salary = Number(prompt("Enter your salary:"));
if (age >=21 && Experience>=2 && salary>=20000) {
  console.log("Employee is eligible");
} else{
  if(age < 21){
    console.log("Employee is not eligible due to age");
  }
  if(Experience < 2){
      console.log("Employee is not eligible due to experience");
  }
  if(salary<20000){
      console.log("Employee is not eligible due to salary");
  }
}

//Task2
let balance = 10000;
let amount = Number(prompt("Enter withdraw amount"));
if (amount < 0) {
  console.log("Invalid amount");
} else if (amount > balance) {
  console.log("Insufficient balance");
}
else if( amount % 100 !==0){
  console.log("Amount should be multiple of 100");
}
else{
  balance = balance - amount;

  console.log("Withdrawal successful");
  console.log("Remaining balance: ₹" +balance);
}

//Task3
let correctUsername ="Admin";
let correctPassword ="12345";
 let attempt = 1;
while(attempt <=3){
  let username = prompt("Enter Username:");
  let Password = prompt("Enter Password:");

  if(username === correctUsername && Password ===correctPassword){
    console.log("Login successful");
    break;
  }
  else{
    console.log("Invalid Username or Password");
  }

  attempt++;
  if(attempt>3){
    console.log("account locked");
  }
}
//Task4


let math = Number(prompt("Enter the marks:"));
let english = Number(prompt("Enter the marks:"));
let science = Number(prompt("Enter the marks:"));
let social = Number(prompt("Enter the marks:"));
let computer = Number(prompt("Enter the marks:"));

let total= math + english + science + social + computer;
let average = total / 5;

console.log("Total:", total);
console.log("average:",average);

if(average >= 90 && average <=100){
  console.log("Grade:A");
}
else if (average>=80){
  console.log("Grade:B");
}
else if (average >=70){
  console.log("Grade:C");
}
else if (average >=60){
  console.log("Grade:D");
}
else{
  console.log("Grade:F");
}
//Task5
//For loop
for( let i=1,i<=5,i++){
  console.log(i);
}
//while loop

    let i =5;
while(i>=1){
  console.log(i);
  i++;
}
//do while loop
let num = 1;

do {
    console.log(num);
    num++;
}
while (num <= 5);
//Task6

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [50000, 1000, 2000, 15000];

let total = 0;

for (let i = 0; i < products.length; i++) {

    console.log(products[i] + " - ₹" + prices[i]);

    total = total + prices[i];
}

console.log("Total = ₹" + total);

//Task7

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};

for (let key in employee) {
    console.log(key + " : " + employee[key]);
}

function calculateBonus(salary) {

    if (salary >= 40000) {
        console.log("Bonus = ₹5000");
    } else {
        console.log("Bonus = ₹3000");
    }
}

calculateBonus(employee.salary);
//Task8
function deposit(balance, amount) {

    balance = balance + amount;

    console.log("Deposited: ₹" + amount);

    return balance;
}

function withdraw(balance, amount) {

    if (amount <= balance) {

        balance = balance - amount;

        console.log("Withdrawn: ₹" + amount);
    }
    else {
        console.log("Insufficient Balance");
    }

    return balance;
}

function checkBalance(balance) {

    console.log("Current Balance: ₹" + balance);
}

let balance = 10000;

balance = deposit(balance, 5000);

balance = withdraw(balance, 2000);

checkBalance(balance);
//Task9

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

function mul(a, b) {
    console.log(a * b);
}

function div(a, b) {
    console.log(a / b);
}

function calculate(callback, a, b) {
    callback(a, b);
}

calculate(add, 20, 10);
calculate(sub, 20, 10);
calculate(mul, 20, 10);
calculate(div, 20, 10);


    
              

    
    
