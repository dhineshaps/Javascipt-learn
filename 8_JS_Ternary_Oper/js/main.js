// Ternary operator - shortform of if else

//symtax

//condition ? ifTrue : ifFalse;

let soup = 'Chicken soup';

let isCustomerBanned = false;

let soupAccess = isCustomerBanned
    ? 'Sorry no soup for you'
    : soup
    ? `Yes we have ${soup}`
    : 'sorry, no soup';
let response = soup ? 'Yes we have' : 'Sorry, no soup today';

console.log(response);

console.log(soupAccess);

let testScore = 79;

let myGrade =
    testScore > 89 ? 'A' : testScore > 79 ? 'B' : testScore > 60 ? 'C' : 'f';

console.log(`The test grade is ${myGrade}`);
