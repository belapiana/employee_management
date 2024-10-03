class Employee {
constructor(name, salary, position, department ) {
    this._name = name
    this._salary = salary;
    this._position = position;
    this._department = department;
}
getDetails() {
    console.log(`Name: ${this._name}, Salary: ${this._salary}, Position: ${this._position}`)
}

}

const Maria = new Employee ("Maria", 45000, "sales", "tech")
const Sara = new Employee ('Sara', 32000, 'HR', 'tech')



class Department {
    constructor(name, employees = []) {
        this._name = name;
        this._employees = employees;
    }
 addEmployee (newEmployee)
{ this._employees.push(newEmployee)}

get departmentSalary () {
    return this._employees.reduce((salaries, employee) => salaries + employee._salary, 0)
}
}

const tech = new Department ('tech', [])
tech.addEmployee(Maria)
tech.addEmployee(Sara)
console.log(tech)

console.log(tech.departmentSalary)