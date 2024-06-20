"use strict"

//the employee class to be used as a blueprint to creat Employees
class Employee {

    //runs when we create a "new" Employee
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    //method that returns the full name of the employee
    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    //method that returns the newJobTitle and newPayRtae
    promote(newJobTitle, newPayRate) {
        this.newJobTitle = newJobTitle;
        this.newPayRate = newPayRate;
    }

}

//create employee 1 from the Employee class (blueprint) using the "new" keyword
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
console.log(`Employee ${employee1.getFullName()} created`);


// Promoting the employee
employee1.promote("Sr. Graphic Artist", 46.75);

// Logging job title and pay rate after promotion
console.log(`Job title is ${employee1.newJobTitle}`);
console.log(`Pay rate is $${employee1.newPayRate}`);



//print out some info about employee 1
// console.log(`Employee ${employee1.getFullName()} created`);
// console.log(`Job title is ${employee1.jobTitle}`);
// console.log(`Pay rate is $${employee1.payRate}`);