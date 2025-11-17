// constructor is a special function or method used to create and initialize objects

//Getters and setters allow you to treat methods like properties, providing a
// cleaner and more  intuitive interface for interacting with object data.

//They are useful for implementing data validation, computed properties, or
// controlled access to internal object states

//Getters are methods that are invoked when you attempt to read the value of a property.

//Setters are methods that are invoked when you attempt to assign a value to a property.

// this keyword is a special identifier that refers to the object that is executing the current piece of code

class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        (this.size = pizzaSize), (this.crust = 'orginal'), (this.toppings = []);
    }

    getCrust() {
        //getter
        return this.crust;
    }

    setCrust(pizzaCrust) {
        //setter
        this.crust = pizzaCrust;
    }

    getToppings() {
        return this.toppings;
    }

    setToppings(topping) {
        this.toppings.push(topping);
    }

    bake() {
        console.log(
            `Baking  a ${this.size} ${this.type} ${this.crust} crust pizza`,
        );
    }
}

const myPizza = new Pizza('pepperoni', 'small');

myPizza.size = 'large'; //to change using . notion
console.log(myPizza.size);

//setter
myPizza.setCrust('thin'); //using setter
console.log(myPizza.getCrust());

myPizza.bake();

console.log(myPizza.getCrust()); //using getter

//toppings

myPizza.setToppings('Sausage');

myPizza.setToppings('olive');

console.log(myPizza.getToppings());
