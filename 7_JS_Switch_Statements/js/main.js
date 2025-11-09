//Switch Statememts

/*

switch (expersion OR vaule)

case 1:
    break

deafult:
    console.log("No Match")

*/

switch (Math.floor(Math.random() * 5 + 1)) {
    case 1: //if 1 is switch exp then below will be displayed
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;

    default:
        console.log('No Match');
}

let playerOne = 'scissor';
let computer = 'paper';

switch (playerOne) {
    case computer:
        console.log('Tie Game');
        break;

    case 'rock':
        if (computer === 'paper') {
            console.log('Computer wins !');
        } else {
            console.log('Player wins !');
        }
        break;

    case 'paper':
        if (computer === 'scissor') {
            console.log('Computer wins !');
        } else {
            console.log('Player wins !');
        }
        break;

    case 'scissor':
        if (computer === 'rock') {
            console.log('Computer wins !');
        } else {
            console.log('Player wins !');
        }
        break;

    default:
        console.log('confused');
}
