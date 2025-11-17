//arrays

const myArray = [];

//adding elements to array it accepets all the types
myArray[0] = 'Dhinesh';
myArray[1] = true;
myArray[2] = 415;

console.log(myArray);

//length of element
console.log(myArray.length);

//last element in an array
console.log(myArray[myArray.length - 1]);

//taking the particualr element
console.log(myArray[1]);

//adding the element to the list
myArray.push('school');

console.log(myArray);

//to remove the last elemet

const lastItem = myArray.pop();

console.log(lastItem);

console.log(myArray);

//to ADD to front of array

myArray.unshift(16);

console.log(myArray);

//r̥emove from the first of array

myArray.shift(16);

console.log(myArray);

console.log(myArray[1]);

// UNDEFINED WILL BE RESULT IF NO ELEMET IN THE PARTICUALR INDEX

//to delete an element in between

/*
delete myArray[1];
console.log(myArray); // but it leaves undefined
*/

//to remove an elemet from array
myArray[3] = 'fet';
myArray[4] = 'quest';
myArray[5] = 'daps';

console.log(myArray);

//to remove a competely

console.log(myArray.splice(1, 1)); //start position:how many needs to be removed
//['Dhinesh', true, 415, 'fet', 'quest', 'daps']

console.log(myArray);
//['Dhinesh', 415, 'fet', 'quest', 'daps']

//using slice can alsi be used to replace

myArray.splice(1, 0, 'dada'); //start position:how many elemets now merged with "data, if
// 2 given then those will be become 1 dada if (1,0,1,sd) it will insert as new"

console.log(myArray); //['Dhinesh', 'dada', 'fet', 'quest', 'daps']

/**************************************************************** */

//slice

const new_Array = ['A', 'B', 'C', 'D', 'E', 'F'];

const new_myArray = new_Array.slice(2, 5); //only keeps between 2 to (5-1)

console.log(new_myArray);

//reverse

console.log(new_myArray.reverse()); //reverse the array

//join

console.log(new_myArray.join()); //creates string

newString = new_myArray.join();

//split the string

console.log(newString.split(',')); //this create an array

//concat

const arr_A = ['A', 'B', 'C'];
const arr_B = ['A', 'B', 'C'];

const arr_C = arr_A.concat(arr_B);

console.log(arr_C);

//spread operator

const new_arr = [...arr_A, ...arr_B]; ///kind of concat

console.log(new_arr);

//to pick a particular value from array

console.log(arr_A[1]);

//to pick fom nested array

const arr_D = [arr_A, arr_B]; //[Array(3), Array(3)]

console.log(arr_D[0][2]);
