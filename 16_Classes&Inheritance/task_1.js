class CoffeeMachine{
    constructor(n, p){
        this.name = n;
        this.power = p;
    }
    on(){
        console.log(this.name + ' power on');
    }
    setPower(Setpower){
        this.power = Setpower;
    }
    makeCoffee(){
        function make(){
            console.log('Cup of coffee strength in ' + this.power);
        }
        setTimeout(make, 2000);
    }

    off(){
        console.log(this.name + '  power off');
    }
}

const myCoffeeMachine = new CoffeeMachine('Ingrid',20);
console.log(myCoffeeMachine.name); // Ingrid
console.log(myCoffeeMachine.power); // 20
myCoffeeMachine.on(); // Ingrid power on
myCoffeeMachine.power.setPower(70);
myCoffeeMachine.makeCoffee(); 
/*(after 2 seconds) Cup of coffee strength in 70*/
myCoffeeMachine.off(); // Ingrid power off