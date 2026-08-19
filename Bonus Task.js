
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: new Date("2024-06-10")
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 35000,
        experience: 3,
        skills: ["Communication", "Excel"],
        joiningDate: new Date("2023-05-15")
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 65000,
        experience: 4,
        skills: ["JavaScript", "React", "SQL"],
        joiningDate: new Date("2022-08-20")
    },
    {
        id: 104,
        name: "Ravi",
        department: "Finance",
        salary: 55000,
        experience: 2,
        skills: ["Excel", "Accounting"],
        joiningDate: new Date("2024-01-12")
    },
    {
        id: 105,
        name: "Priya",
        department: "IT",
        salary: 70000,
        experience: 5,
        skills: ["JavaScript", "React", "Node"],
        joiningDate: new Date("2021-03-18")
    },
    {
        id: 106,
        name: "Sita",
        department: "HR",
        salary: 30000,
        experience: 1,
        skills: ["Communication", "Excel"],
        joiningDate: new Date("2025-02-10")
    },
    {
        id: 107,
        name: "Ajay",
        department: "IT",
        salary: 80000,
        experience: 6,
        skills: ["Java", "SQL", "Spring"],
        joiningDate: new Date("2020-07-05")
    },
    {
        id: 108,
        name: "Anu",
        department: "Marketing",
        salary: 40000,
        experience: 2,
        skills: ["Marketing", "Excel"],
        joiningDate: new Date("2024-09-25")
    }
];
/ Display all employees using forEach
function displayEmployees(){
employees.forEach(function(employee){
console.log("ID:",employee.id,"Name:",employee.name,"Department:",employee.department,"Salary:",employee.salary,"Experience:",employee.experience);
});
}
// Add a new employee using push
function addEmployee(employee){
employees.push(employee);
console.log("Employee added successfully");
}
// Delete employee using findIndex and splice
function deleteEmployee(id){
let index=employees.findIndex(function(employee){
return employee.id===id;
});
if(index!==-1){
employees.splice(index,1);
console.log("Employee deleted successfully");
}else{
console.log("Employee not found");
}
}
// Search employee using find
function searchEmployeeById(id){
let employee=employees.find(function(employee){
return employee.id===id;
});
if(employee){
console.log(employee);
}else{
console.log("Employee not found");
}
}
// Calculate total salary using reduce
function calculateTotalSalary(){
let total=employees.reduce(function(sum,employee){
return sum+employee.salary;
},0);
return total;
}
// Check salary category using conditional statements
function getSalaryCategory(salary){
if(salary<=30000){
return "Junior";
}else if(salary<=60000){
return "Mid Level";
}else{
return "Senior";
}
}
// Display joining year, month and salary category
employees.forEach(function(employee){
console.log(employee.name,"Joining Year:",employee.joiningDate.getFullYear());
console.log(employee.name,"Joining Month:",employee.joiningDate.getMonth()+1);
console.log(employee.name,"Category:",getSalaryCategory(employee.salary));
});
// Menu choice
let choice;
do{
// Display menu and get user choice
choice=Number(prompt("1. Display All Employees\n2. Add Employee\n3. Search Employee\n4. Filter High Salary Employees\n5. Calculate Total Salary\n6. Sort By Salary\n7. Delete Employee\n8. Exit"));
switch(choice){
// Display all employees
case 1:
displayEmployees();
break;
// Add employee
case 2:
let newEmployee={
id:Number(prompt("Enter ID:")),
name:prompt("Enter Name:"),
department:prompt("Enter Department:"),
salary:Number(prompt("Enter Salary:")),
experience:Number(prompt("Enter Experience:")),
skills:[],
joiningDate:new Date()
};
addEmployee(newEmployee);
break;
// Search employee by ID
case 3:
let searchId=Number(prompt("Enter Employee ID:"));
searchEmployeeById(searchId);
break;
// Filter employees whose salary is above 40000
case 4:
let result=employees.filter(function(employee){
return employee.salary>40000;
});
console.log(result);
break;
// Calculate total salary
case 5:
console.log("Total Salary:",calculateTotalSalary());
break;
// Sort employees by salary from highest to lowest
case 6:
let sorted=[...employees];
sorted.sort(function(a,b){
return b.salary-a.salary;
});
console.log(sorted);
break;
// Delete employee by ID
case 7:
let deleteId=Number(prompt("Enter Employee ID:"));
deleteEmployee(deleteId);
break;
// Exit the program
case 8:
console.log("Program exited");
break;
// Invalid menu choice
default:
console.log("Invalid choice");
}
}while(choice!==8);
