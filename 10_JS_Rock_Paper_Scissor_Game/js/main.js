//game

let playGame = confirm('Shall we play rock, paper or scissors ?');

if (playGame) {
    //playgame
    let playerChoice = prompt('Please enter  rock, paper or scissor');

    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        if (
            playerOne === 'rock' ||
            playerOne === 'paper' ||
            playerOne === 'scissor'
        ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
                computerChoice === 1
                    ? 'rock'
                    : computerChoice === 2
                    ? 'paper'
                    : 'scissor';

            let result =
                playerOne === computer
                    ? 'Game is tie'
                    : computer === 'rock' && playerOne === 'paper'
                    ? 'Player wins'
                    : computer === 'paper' && playerOne === 'scissor'
                    ? 'Player wins'
                    : computer === 'scissor' && playerOne === 'rock'
                    ? 'Player wins'
                    : 'computer wins';

            console.log(result);
            let playAgain = confirm('play Again ?');

            if (playAgain) {
                location.reload();
            } else {
                alert('ok, thanks for playing');
            }
        } else {
            alert("you didn't enter the any of rock, paper, scissor");
        }
    } else {
        alert('guess you have changed the mind');
    }
} else {
    alert('okay may be next time');
}
