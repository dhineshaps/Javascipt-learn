//objects
//key-value pairs in curly braces

//this - can be used to represent the same object

//inheritance

const myObj = {name: 'Dhinesh'};

console.log(myObj);

console.log(myObj.name); //to access value

const newObj = {
    alive: 'true',
    answer: 42,
    hobbies: ['Eat', 'Sleep', 'Code'],
    beverage: {
        morning: 'Tea',
        evening: ['Tea', 'Cofee', 'Milo'],
    },

    action: function () {
        return 'hello';
    }, //can have anonyms function
};

console.log(newObj.answer);

console.log(newObj.hobbies[1]);

console.log(newObj.beverage.morning);

console.log(newObj.beverage.evening[2]);

//another way to get the object
console.log(newObj['alive']);

console.log(newObj.action());

/***************************************************************/

const vehicle = {
    wheels: 4,
    engine: function () {
        return 'Vrooooom';
    },
};

// inheriting propery heel andmethod engin from vehicle object and creating a
//truck object based on that - so truck inheritae the  properties of vehicle

const truck = Object.create(vehicle);

truck.doors = 2;

console.log(vehicle.engine());

console.log(truck);

console.log(truck.wheels); //can accesss the vehicle - inheritance

console.log(truck.engine());

const car = Object.create(vehicle); // in heriting

car.doors = 4;
car.ac = true;
car.engine = function () {
    return 'zingggg';
};

//first it will try to find the same object properly if not found then it will
//use the parents

console.log(car.engine() + ' ' + car.doors);

const tesla = Object.create(car); //multiple inheritance

console.log(tesla.wheels); // here wheel is part of vehicle
console.log(tesla.ac); // part of car

tesla.auto_Pilot = true;

console.log(tesla.auto_Pilot); // belongs to tesla

tesla.engine = function () {
    return 'zzzzzzzzzz';
};

console.log(tesla.engine());

/********************************************************* */
//band

const band = {
    vocals: 'Robert Plant',
    guitars: 'Jimmy Page',
    bass: 'John Paul Jones',
    drums: 'John Bonham',
};

console.log(Object.keys(band)); //all keys
console.log(Object.values(band));

//for in loop

for (let job in band) {
    console.log(band[job]);
}

for (let job in band) {
    console.log(`on ${job}, it's ${band[job]} !`);
}

//adding methode or value
band.keyboards = 'daps';

band.start = function () {
    return '^^^*****)))(((((';
};

for (let job in band) {
    console.log(`on ${job}, it's ${band[job]} !`);
}

console.log(band.start());

//to delete

delete band.keyboards;

//to check whether particualr key is there or not - returns boolean
console.log(band.hasOwnProperty('keyboards'));

//**************************************************************** */

//destructuring objects

//defining myVariable and pulling the value of guitar out of the objects
//myVariable - band.guitar
const {guitar: myVariable} = band;

const {bass: myBass, drums: myDrums} = band; //can have more than 1 variable

console.log(myBass);

//also be
const {vocals, guitar, bass} = band;
console.log(vocals);
/****************************************************************** */

/****************************************************************** */
// here (vocals) key should be in object
function sings({vocals}) {
    return `${vocals} sings!`;
}

console.log(sings(band));
/****************************************************************** */
