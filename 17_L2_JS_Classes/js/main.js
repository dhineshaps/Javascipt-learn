//parent

class Pizza {
    constructor(pizzaSize) {
        (this.size = pizzaSize), (this.crust = 'orginal');
    }

    getCrust() {
        //getter
        return this.crust;
    }

    setCrust(pizzaCrust) {
        //setter
        this.crust = pizzaCrust;
    }
}

//child class
class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = 'The Works';
    }

    slice() {
        console.log(`our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

//here parent act as blueprint
//we don't need to create the object for parent
const mySpecialty = new SpecialtyPizza('medium');

mySpecialty.slice();
