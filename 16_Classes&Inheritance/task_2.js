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
            setTimeout(() => console.log('Cup of ' + this.coffeeName), 2000);
    }
    
    off(){
        setTimeout(() => console.log(this.name + '  power off'), 3000);
    }
}

const espressoMachine = new CoffeeMachine ('Emma', 35, 'espresso');

espressoMachine.on(); 
espressoMachine.makeCoffee();
espressoMachine.off();