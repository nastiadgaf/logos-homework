

class Employee {
    constructor(f, r, d){
        this.fullName = f;
        this.rate = r;
        this.days = d;
    }
   
    getSalary(){
        let  salary = 0;
        return salary = this.rate * this.days;
    }
    static getGeneralSum(user1, user2){
       return user1.salary + user2.salary;
    }
};

    const jack = new Employee('Jack Shepard', 500, 22);
    jack.salary = jack.getSalary();
    const tom =  new Employee('Tom Atkins', 100, 25);
    tom.salary = tom.getSalary();

console.log(jack.salary); // 11000
console.log(tom.salary); // 2500 
console.log(Employee.getGeneralSum(jack,tom)); // 13500