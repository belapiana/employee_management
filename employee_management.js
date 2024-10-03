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

// const Maria = new Employee ("Maria", 45000, "saler", "tech")

// console.log(Maria)
// console.log(Maria.getDetails())