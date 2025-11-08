//Numbers

//NaN - Not a number
const myNum = 16;

//Java script consider both int and float as numbers
//it will omit value if there is no decimal value like 16.0 -> 16 but 16.32->16.32
console.log(myNum);

const myFloat = 16.2;

const myStr = '16'; //Here it will act as string

const mystrflow = '45.165bd';

console.log(myNum === myFloat);

console.log(myNum === myStr);

console.log(myNum + myStr); // here it will be 1616

//type convert number(string_value_which is_number)

console.log(myNum + Number(myStr)); //32
console.log(myNum + Number('DFF')); // Here it will results in NaN, can't convert string to numer
console.log(myNum + Number(true)); // here true will be 1, so 16+1

console.log(myNum + Number(false)); //false will be 0, so 16

//to check whether it is integer

console.log(Number.isInteger(myNum)); // true

console.log(Number.isInteger(myFloat));

//to get the floating point variable

console.log(Number.parseFloat(mystrflow)); //it will remove the str charc -- 45.165

console.log(Number.parseInt(mystrflow)); // ONLY TAKES INT VALUE FROM STRING

console.log(myFloat.toFixed(1)); //round off the decimal to be fixed,
//16.322 ->16.32 if toFixed(2)

console.log(myFloat.toString()); // CONVERT THE NUMBER TO STRING

console.log(Number.isNaN(myFloat)); //RETURN FALSE if it is number , here checking whetehr it is not a number
