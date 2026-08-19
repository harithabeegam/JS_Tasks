// Employee management system task
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
        skills: ["Excel", "Communication", "Recruitment"],
        joiningDate: new Date("2023-05-15")
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 65000,
        experience: 4,
        skills: ["JavaScript", "React", "SQL"],
        joiningDate: new Date("2022-03-20")
    },
    {
        id: 104,
        name: "Ravi",
        department: "Finance",
        salary: 28000,
        experience: 1,
        skills: ["Excel", "Accounts", "Tally"],
        joiningDate: new Date("2025-01-10")
    },
    {
        id: 105,
        name: "Priya",
        department: "IT",
        salary: 55000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: new Date("2024-08-12")
    },
    {
        id: 106,
        name: "Sita",
        department: "HR",
        salary: 75000,
        experience: 5,
        skills: ["Communication", "Management", "Excel"],
        joiningDate: new Date("2021-07-18")
    },
    {
        id: 107,
        name: "Rahul",
        department: "IT",
        salary: 30000,
        experience: 1,
        skills: ["Python", "SQL", "JavaScript"],
        joiningDate: new Date("2025-02-05")
    },
    {
        id: 108,
        name: "Anjali",
        department: "Marketing",
        salary: 50000,
        experience: 3,
        skills: ["Digital Marketing", "SEO", "Content"],
        joiningDate: new Date("2023-09-25")
    }
];
//Display all employee for using foreach()
employees.forEach(function(employee) {
        console.log("Employee id:",employee.id);
        console.log("Employee name:",employee.name);
        console.log("Employee department:",employee.department);
        console.log("Employee experience:",employee.experience);
        console.log("Employee salary:",employee.salary);
        console.log("Employee skilss:",employee.skills);
        console.log("Employee joiningdate:",employee.joiningDate);
    });
//find employess whose salary is greater than 40000
let highsalaryEmployees= employees.filter(function(employee){
return employee.salary >40000;
});

console.log("employess with salary above 40000");
console.log(highsalaryEmployees);
//search employee using id for using find()
let id =Number(prompt("Enter your id number:"));

 let employee = employees.find(function(employee){
        return employee.id === id;
    });
    console.log(employee);
//Calculate total salary using reduce()
let totalSalary= employees.reduce(function(total,employee){
    return total + employee.salary;

},0);
console.log(totalSalary);
//check whether anyone earns above 100000 using some()
let highSalary = employees.some(function(employee){
    return employee.salary >100000
});
console.log("Anyone earning above 100000" , highSalary);
//check whether everyone has at least 1 year experience using every()
let allExperienced = employees.every(function(employee){
    return employee.experience >= 1
});
console.log(" Everyone has a atleast 1 year experienc:", allExperienced);
//sort employees by salary highest to lowest 
let sortedEmployees = [...employees];
sortedEmployees.sort(function(a,b){
    return b.salary - a.salary;
});
console.log("Employess sorted by salary:");
console.log(sortedEmployees);
//add employee at the end by using push
employees.push({
    id:109,
    name:"Haritha",
    department:"IT",
    salary: 40000,
    experience:2,
    skills:["Java","SQl"],
    joiningDate : new Date ("2024-04-10")
});
console.log("After push:");
console.log(employees);
//remove last employee
employees.pop()
console.log("After pop:",employees);
//Add employee at beginning
employees.unshift(
    {
        id:110,
        name:"Sanju",
        department:"Testing",
        salary:37800,
        experience:2,
        skills:["Testing" , "SQL"],
        joiningDate: new Date ("2024-02-15")
    });
    console.log("after unshift:", employees);
//remove first employee
employees.shift()
console.log("after shift:",employees);
//Object destruction
let employee = employees[0];
let {name,department,salary} = employee;
console.log("Name:", name);
console.log("Department:", department);
console.log("salary:",salary)
//Array destruction
let [skill1,skill2,skill3]= employee.skills
 console.log("skills:", skill1);
    console.log("skills:", skill2);
    console.log("skills:", skill3);
//spread oparator
let newEmployeeList = [...employees];
console.log("new Employee list:",newEmployeeList);
//rest oparater
function addSkilss(name,...skills){
    console.log("Employee name:", name);
    console.log("skills:", skills);

}
addSkilss("Haritha", "HTML","CSS","JS");
//12 functions
//Add employee
function addEmployee(employee){
    employees.push(employee);
}
console.log(addEmployee);
addEmployee({
    id:109,
    name: "CA",
    department:"IT",
    salary:40000,
    experience:2,
    joiningDate:new Date("2023-2-2"),
});
addEmployee(addEmployee);
console.log(employees);
delete employee
function deleteEmployee(id){
    let index =  employees.findIndex(function(employee){
        return employee.id === id;
    });
    if (index !== -1){
        employees.splice(index,1);
        console.log("Employess deleted");

    } else{
        console.log("Employee not found");
    }
    
}
let id =Number(prompt("Enter employee Id to delete"));
deleteEmployee(id);
//search employee
function searchEmployee (id){
let employee = employees.find(function(employee){
    return employee.id === id;
});
if (employee){
    console.log(employee);
} else{
    console.log("Employee not found");

}
}
let id = Number(prompt("enter the  employee id"));
searchEmployee(id);
//salary category
function salaryCategory(salary){
    if(salary <=30000){
        return "junior";
    }else if (salary <=60000){
        return "mid level";
    } else {
        return "senior";
    }
    }
    employees.forEach(function(employee){
        console.log(employee.name + " -" + salaryCategory(employee.salary));

    });
Date
employees.forEach(function(employee){
    console.log("Employee:" , employee.name);
    console.log("Joining month:",employee.joiningDate.getMonth()
);
});
//user input
let id = Number(prompt("Enter Employee ID:"));
let searchedEmployee = employees.find(function(employee){
    return employee.id === id;
});
if(searchedEmployee){
    console.log("Employedd details:",searchedEmployee);
}



  
  
