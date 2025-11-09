//conditional if statements

//syntax

//nested if is possible, if under else, if under else if

let customerIsBanned = false;

let soup = 'chicken soup';

let crackers = true;

let collegeStudent = false;

let reply;

if (customerIsBanned) {
    reply = 'No soup for you!!!';
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} and crackers`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, we're out of ${soup}`;
}

console.log(reply);

let testScore = 40;

let grade;

if (testScore >= 89) {
    console.log('You got A Grade');
    grade = 'A';
} else if (testScore > 60 && testScore <= 88) {
    console.log('Your grade is B');
    grade = 'B';
} else {
    if (collegeStudent) {
        console.log('Your grade is C');
        grade = 'C';
    } else {
        grade = 'F';
    }
}

console.log(grade);
