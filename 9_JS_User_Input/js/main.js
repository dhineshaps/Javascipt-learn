// User input

/*
let myBool = confirm('ok === True\nCancel === False');

console.log(myBool); */

let name_l = prompt('please enter your name:');
// console.log(typeof name_l);

if (name_l) {
    console.log(name_l.length);
    console.log(name_l.trim().length);
    console.log(name_l.trim());
    //console.log(name_l ?? "You didn't enter your name"); // if user enter s name it
    console.log(name_l);
    //  will display else it will print "you di't
} else {
    console.log("You didn't enter your name");
}
