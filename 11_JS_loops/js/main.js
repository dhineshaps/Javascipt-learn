//loops

let myNumber = 0;

while (myNumber < 5) {
    myNumber++;
    console.log(myNumber);
}

// don't create an endless loop

//do while

do {
    myNumber++;
    console.log(myNumber); //do executes even the condition fot me for first run
} while (myNumber < 1);

//for loop

for (let i = 50; i <= 55; i++) {
    //here  i++ is post increment
    console.log(i);
    //i++
}

let name_1 = 'Dhinesh';

for (let i = 0; i <= name_1.length; i++) {
    console.log(name_1.charAt(i));
}

let counter = 0;
let myLetter;
while (true) {
    myLetter = name_1[counter];
    console.log(myLetter);

    if (counter === 5) {
        break; //continue to iterate
    }
    counter++;
}
// // // }
