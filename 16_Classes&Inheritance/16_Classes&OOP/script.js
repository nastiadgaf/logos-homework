class Employee {
    constructor(fullName, rate, days) {
        this.fullName = fullName;
        this.rate = rate;
        this.days = days;
        Employee.employeesList.push(this);
    }

    static employeesList = [];

    getSalary() {
        let salary;
        return salary = this.rate * this.days;
    }
    static getGeneralSum() {
        const salaries = Employee.employeesList.map((employee) => employee.getSalary());
        let generalSum = 0;
        for (let salary of salaries) {
            generalSum += salary;
        }
        return generalSum;
    }
};

class SecretOfficer extends Employee {
    constructor(fullName, rate, days) {
        super();
        this.fullName = fullName;
        this.rate = rate;
        this.days = days;
        Employee.employeesList.pop(this);
    }
}

const jack = new Employee('Jack Shepard', 500, 22);
jack.salary = jack.getSalary();
const tom = new Employee('Tom Atkins', 100, 25);
tom.salary = tom.getSalary();
const james = new SecretOfficer('James B', 10000);
console.log(james.fullName);
console.log(james.rate);

james.days = 22;
console.log(james.salary);
console.log(jack.salary); // 11000
console.log(tom.salary); // 2500 
console.log(Employee.getGeneralSum()); // 13500