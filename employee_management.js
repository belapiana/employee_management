// Task 1: Create an Employee Class

class Employee {
constructor(name, salary, position, department ) {
    this._name = name
    this._salary = salary;
    this._position = position;
    this._department = department;
}
    getDetails() {
    return (`Name: ${this._name}, Salary: ${this._salary}, Position: ${this._position}`)
}
}

// Task 2: Create a Department Class 

class Department {
    constructor(name, employees = []) {
        this._name = name;
        this._employees = employees;
    }
 addEmployee (newEmployee)
{ this._employees.push(newEmployee)} // Use .push to add employee to the array

get getDepartmentSalary () {
    return this._employees.reduce((salaries, employee) => salaries + employee._salary, 0)
}
// Task 4: Handle Bonuses for Managers

get totalDepartmentSalaryWithBonus () {
    return this.getDepartmentSalary + this._employees.reduce((bonuses, employee) => bonuses + (employee._bonus || 0), 0)
}
}

// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department );
        this._bonus = bonus;
    }
// New getDetails with bonus
    getDetails () {
        return (`${super.getDetails()}, Bonus: ${this._bonus}`)
    }
}

// Task 5: Create and Manage Departments and Employees

const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments

engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Calculate total salary for each department

console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.totalDepartmentSalaryWithBonus}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.totalDepartmentSalaryWithBonus}`);

// Log getDetails Method

console.log(bob.getDetails());    
console.log(charlie.getDetails());