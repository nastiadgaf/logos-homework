class CoffeeMachine{
    constructor(n, p, coffee){
        this.name = n;
        this.power = p;
        this.coffeeName = coffee;
    }
    on(){
        console.log(this.name + ' power on');
    }
    makeCoffee(){
            console.log('Cup of ' + this.coffeeName);  
            //setTimeout(makeCoffee, 2000);
    }
    
    off(){
        console.log(this.name + '  power off');
    }
}

const espressoMachine = new CoffeeMachine ('Emma', 35, 'espresso');

espressoMachine.on(); 
espressoMachine.makeCoffee();
myCoffeMachine.off();