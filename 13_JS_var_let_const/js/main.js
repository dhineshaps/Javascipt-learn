// var, let, const

var x = 1;

var x = 2;

console.log(x); // here the latest value be 2, this creates isssue when multiple
//jave scripts are invoked in single execution, so const is prefered

//scope

// global scope, can be availaed any where
var x = 1;
let y = 22;
const z = 3;

//local scope

{
    const z = 5; // here as z declared before but still here we declare locally
    // and it won't there any error

    console.log(z);
}

//local scope

function myFunc() {
    let x = 100;
    var y = 50;
    const z = 8;
    console.log(z);
    console.log(y);

    {
        const z = 5; // scope  inside the function the z differe from here
        console.log(z);
        console.log(x); // here it will take from global - if not declared inside the function
        console.log(y);
    }
}

myFunc();
