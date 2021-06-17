class Employee {
    constructor(f, r, d) {
        this.fullName = f;
        this.rate = r;
        this.days = d;
        Employee.employeesList.push(this);
        // console.log(Employee.employeesList);
    }
    static employeesList = [];
    getSalary() {
        return this.rate * this.days;
    }

    static getGeneralSum() {
        let generalSum = 0;
        for (let salary of Employee.employeesList.getSalary()) {
            generalSum += salary;
        }
        return generalSum;
    }
};

const jack = new Employee('Jack Shepard', 500, 22);
jack.salary = jack.getSalary();
const tom = new Employee('Tom Atkins', 100, 25);
tom.salary = tom.getSalary();

console.log(jack.salary); // 11000
console.log(tom.salary); // 2500 
console.log(Employee.getGeneralSum()); // 13500