//parent

//acccess modifiers

/***************************************************************** */
//factory function - to understand about it - so we can try the same in class

function pizzaFactory(pizzaSize) {
    const crust = 'orginal'; //it can't be accesd outside or changed, it is
    //scoped
    //private propery
    //private variables
    const size = pizzaSize;

    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
    };
}

const myPizzaFact = pizzaFactory('small');
myPizzaFact.bake();

/***************************************************************** */
class Pizza {
    crust = 'orginal'; //public field
    #sauce = 'traditional'; //private field
    #size;

    constructor(pizzaSize) {
        // _ -> makes private , only changed within class not outer
        this.#size = pizzaSize;
    }

    getCrust() {
        //getter
        return this.crust;
    }

    setCrust(pizzaCrust) {
        //setter
        this.crust = pizzaCrust;
    }

    hereYouGo() {
        console.log(
            `here is your ${this.crust} ${this.#sauce} sause ${
                this.#size
            } pizza`,
        );
    }
}

const myPizza = new Pizza('large');

myPizza.hereYouGo();

console.log(myPizza.crust);

console.log(myPizza.getCrust());

//console.log(myPizza.#sauce); //private field - can't allowed
