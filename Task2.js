//Task 1//

let studentName = "Haritha";
var age = 23;
const course = "JavaScript";
let mark = 95;

console.log(studentName);
console.log(age);
console.log(course);
console.log(mark);

//Task 2//

let name = prompt("Enter your Name");
let userAge = prompt("Enter your Age");

console.log(name);
alert(userAge);

//Task 3//

let myName = "Haritha";
let myAge = 23;
let isStudent = true;
let data;
let value = null;

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(isStudent, typeof isStudent);
console.log(data, typeof data);
console.log(value, typeof value);

//Task 4//

let products = ["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"];

console.log(products[0]);
console.log(products[2]);
console.log(products[5]);
console.log(products);

//Task 5//

let employee = {
    name: "Haritha",
    age: 23,
    role: "Developer",
    salary: 30000
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.salary);

//Task 6//

let price = 500;
let quantity = 3;

let totalPrice = price * quantity;
let discount = 100;
let finalAmount = totalPrice - discount;
let averagePrice = totalPrice / quantity;

console.log("Total Price:", totalPrice);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);
console.log("Average Price:", averagePrice);

//Task 7//

console.log(25 > 20);
console.log(15 < 10);
console.log(50 == "50");
console.log(50 === "50");
console.log(100 != "100");
console.log(100 !== "100");

//Task 8//

console.log(10 > 5 && 20 > 15 || 5 > 10);
console.log(10 < 5 || 20 >= 20 && 5 == "5");
console.log(15 === "15" || 10 > 5 && 8 < 3);
console.log(20 >= 20 && 5 !== "5" || 10 < 5);
console.log(25 < 20 || 30 == "30" && 10 >= 10);

//Predicted Output//

// true
// true
// false
// false
// true

//Task 9//

let passwordCorrect = true;

console.log(passwordCorrect ? "Login successful" : "Invalid password");

//Task 10//

let mark1 = "80";
let mark2 = "70";

let totalMarks = Number(mark1) + Number(mark2);

console.log(totalMarks);

//Task 11//

let voteAge = 20;

if (voteAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

//Task 12//

let studentMark = 85;

if (studentMark >= 90 && studentMark <= 100) {
    console.log("A Grade");
} else if (studentMark >= 75) {
    console.log("B Grade");
} else if (studentMark >= 50) {
    console.log("C Grade");
} else if (studentMark >= 0) {
    console.log("Fail");
} else {
    console.log("Invalid Mark");
}

//Task 13//

let time = 15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
} else if (time >= 16 && time <= 19) {
    console.log("Good Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}

//Task 14//

let candidateAge = 22;
let height = 172;
let weight = 72;

if (candidateAge >= 21) {
    if (height >= 170) {
        if (weight >= 70) {
            console.log("Eligible for Job");
        } else {
            console.log("Not Eligible: Weight should be at least 70 kg");
        }
    } else {
        console.log("Not Eligible: Height should be at least 170 cm");
    }
} else {
    console.log("Not Eligible: Age should be at least 21");
}

//Task 15//

let trafficLight = "green";

switch (trafficLight) {
    case "red":
        console.log("Stop the vehicle");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light");
}
