//Numbers

const myName = 'Dhinesh';

const nameLen = myName.length; //7

const randNo = Math.floor(Math.random() * (nameLen - 1)) + 1;

const randNo_New = Math.floor(Math.random() * nameLen); //better to go with
console.log(randNo);

console.log(randNo_New);
console.log(myName.charAt(randNo)); //

console.log('fetquest'.charAt(Math.floor(Math.random() * 7))); //other way-chianing
