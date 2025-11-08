//Strings

const myVar = 'Dhinesh'; //once it declared as  cont it can't be reassigned

console.log(myVar.length);

//String Method

console.log(myVar.charAt(10));

console.log(myVar.indexOf('ine')); //will ive the index of first occurace of
//group of charcs

console.log(myVar.lastIndexOf('esh')); //will give the last occurance of grou
//chars
//-1 for not found

//slice - start:end , return won't provide end char

console.log(myVar.slice(2, 5)); //ine
console.log(myVar.slice(2)); //inesh
console.log(myVar.slice(6, 9)); // only h

console.log(myVar.slice(9, 10)); // returns null

//lower and upper case

console.log(myVar.toLocaleLowerCase()); //converted entire sting to lower case

console.log(myVar.toUpperCase()); //COMPLETE UPPER

//INCLUDE - similar to contains, returs bools
console.log(myVar.includes('esh')); //true

console.log(myVar.includes('dgf')); //false

//split at the given string , if string not there then return the entire string

console.log(myVar.split('e')); //['Dhi', 'esh']

console.log('every,day, is, awesome'.split(','));
