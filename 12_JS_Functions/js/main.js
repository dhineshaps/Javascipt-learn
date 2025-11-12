function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum(2, 5));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf('@'));
}

console.log(getUserNameFromEmail('daps@g.com'));

//another way
const getUserNameFromEmail_new = function (email) {
    return email.slice(0, email.indexOf('@'));
};

console.log(getUserNameFromEmail_new('daps@g.com'));

//anothe way
const getUserNameFromEmail_new2 = (email) => {
    return email.slice(0, email.indexOf('@'));
};

console.log(getUserNameFromEmail_new2('daps@g.com'));

//anothr way

const toProperCase = (name_1) => {
    return name_1.charAt(0).toUpperCase() + name_1.slice(1).toLowerCase();
};

console.log(toProperCase('dHine')); //Dhine
